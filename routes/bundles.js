const express = require('express');
const router = express.Router();
const Bundle = require('../models/bundle');
const User = require('../models/user');
const Credit = require('../models/credit');
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
const config = require('../config/database');
const bcrypt = require('bcryptjs');

// moment.utc().add(5, 'hours').toDate()
// created: {
//     $lte: moment.utc(obj.dateto).endOf('day').toDate(),
//     $gte: moment.utc(obj.datefrom).startOf('day').toDate()
// }


router.post('/credit/register',(req,res)=>{
    let credit = new Credit({
        smscredit:req.body.smscredit,
        whatsappcredit:req.body.whatsappcredit,
        from:req.body.from,
        to:req.body.to,
        cost:req.body.cost,
        payment:req.body.payment,
        createdby:req.body.createdby,
        created:moment.utc().add(5, 'hours').toDate()
    });

    if(req.body.from == "sa@mangotree.com"){
        // credit was requested from mangotree
        credit.save((err,credit)=>{
            if(err){
                res.json({
                    success:false,
                    err:err
                })
            }else{
                if(req.body.cost == 0 && req.body.payment == true){
                    User.findOne(
                        {
                            email:req.body.createdby
                        },
                        (err,docx)=>{
                            if(err){
                                res.json({
                                    success:false,
                                    err:err
                                })
                            }
                            if(docx){
                                docx.creditsms = docx.creditsms + req.body.smscredit;
                                docx.creditwhatsapp = docx.creditwhatsapp + req.body.whatsappcredit;

                                docx.save(function(err){
                                    if(err){
                                        res.json({
                                            success:false,
                                            err:err
                                        })
                                    }else{
                                        res.json({
                                            success:true
                                        })
                                    }
                                })
                            }else{
                                res.json({
                                    success:false,
                                    err:'User not found.'
                                })
                            }
                        }
                    );
                }else{
                    res.json({success:true})
                }
            }
        });
    }else{
        // credit was shared bw accounts
        User.findOne(
        {
            email:req.body.from,
            expirybundle: {
                $gte: moment.utc().add(5,'hours').toDate(),
            }   
        },
        (err,doc)=>{
            if(err){
                res.json({success:false,err:err})
            }else{
                if(!doc){
                    res.json({success:false,err:'configuration expired!'})
                    return false;
                }
                if(req.body.smscredit <= doc.creditsms && req.body.whatsappcredit <= doc.creditwhatsapp){
                    doc.creditsms = doc.creditsms - req.body.smscredit;
                    doc.creditwhatsapp = doc.creditwhatsapp - req.body.whatsappcredit;
                    doc.save(function(err){
                        if(err){
                            res.json({success:false,err:err})
                        }else{
                            credit.save(function(err){
                                if(err){
                                    res.json({success:false,err:err})
                                }else{
                                    User.findOne({email:req.body.to},(err,docx)=>{
                                        docx.creditsms = docx.creditsms + req.body.smscredit;
                                        docx.creditwhatsapp = docx.creditwhatsapp + req.body.whatsappcredit;
                                        docx.save(function(err){
                                            if(err){
                                                res.json({
                                                    success:false,
                                                    err:err
                                                })
                                            }else{
                                                res.json({success:true})
                                            }
                                        })
                                    })
                                }
                            })
                        }
                    });
                }else{
                    res.json({success:false,err:'not enough resources to share.'})
                }
            }
        })
    }

});



router.get('/credit/history/:query',(req,res)=>{
    let query = JSON.parse(req.params.query);

    Credit.find({from:query.from,to:query.to},null,{sort:{created:-1}},(err,docx)=>{
        if(err){
            res.json({
                success:false,
                err:err
            })
        }else{
            res.json({
                success:true,
                data:docx
            })
        }
    })

})


router.post('/register', (req, res)=>{
    //res.send("Register");

    let expiry=moment.utc().add(5, 'hours').toDate();

    if(req.body.expiry == "1"){
        expiry = moment.utc(expiry).add(1, 'months').toDate();
    }else if(req.body.expiry == "2"){
        expiry = moment.utc(expiry).add(2, 'months').toDate();
    }else if(req.body.expiry == "3"){
        expiry = moment.utc(expiry).add(3, 'months').toDate();
    }

    let bundle = new Bundle({
        expiry:expiry,
        encryption:req.body.encryption,
        featureset:req.body.featureset.trim().split(','),
        smstp:req.body.smstp,
        watp:req.body.watp,
        cost:req.body.cost,
        payment:false,
        status:'pending',
        createdby:req.body.createdby,
        created:moment.utc().add(5, 'hours').toDate()
    });

    Bundle.find(
        {
            createdby:req.body.createdby,
            expiry: {
                $gte: moment.utc().add(5,'hours').toDate(),
            }   
        },
        (err,docx)=>{
            if(docx.length>0){
                res.json({
                    success:false
                })
            }else{
                bundle.save((err,bundle)=>{
                    if(err){
                        throw err;
                    }else{

                        res.json({
                            success:true,
                            bundle:bundle
                        });

                    }
                });
            }
        }
    )



});

router.put('/extendexpirypromo',(req,res)=>{
    let email = req.body.email;
    let expiry = moment.utc(req.body.expiry).add(7,'days').toDate();

    User.findOneAndUpdate(
        {
            email:email
        },
        {
            $set:{
                expirybundle:expiry
            }
        },
        (err,doc)=>{
            if(err)
            {
                res.json({success:false,err:err})
            }
            if(doc){
                User.updateMany(
                    {
                        parents:{
                            $in: email
                        }
                    },
                    {
                        $set:{
                            expirybundle:expiry
                        }
                    },
                    (err,raw)=>{
                        if(err)
                            {
                                res.json({success:false,err:err})
                            }
                            res.json({success:true})
                    }
                )
            }else{
                res.json({success:false,err:'no user updated'})
            }
        }
    )
    
});


router.put('/extendsmstp10promo',(req,res)=>{
    let email = req.body.email;

    User.findOneAndUpdate(
        {
            email:email
        },
        {
            $set:{
                smstp:10
            }
        },
        (err,doc)=>{
            if(err)
            {
                res.json({success:false,err:err})
            }
            if(doc){
                User.updateMany(
                    {
                        parents:{
                            $in: email
                        }
                    },
                    {
                        $set:{
                            smstp:10
                        }
                    },
                    (err,raw)=>{
                        if(err)
                            {
                                res.json({success:false,err:err})
                            }
                            res.json({success:true})
                    }
                )
            }else{
                res.json({success:false,err:'no user updated'})
            }
        }
    )
    
});

router.put('/extendwatp10promo',(req,res)=>{
    let email = req.body.email;

    User.findOneAndUpdate(
        {
            email:email
        },
        {
            $set:{
                watp:10
            }
        },
        (err,doc)=>{
            if(err)
            {
                res.json({success:false,err:err})
            }
            if(doc){
                User.updateMany(
                    {
                        parents:{
                            $in: email
                        }
                    },
                    {
                        $set:{
                            watp:10
                        }
                    },
                    (err,raw)=>{
                        if(err)
                            {
                                res.json({success:false,err:err})
                            }
                            res.json({success:true})
                    }
                )
            }else{
                res.json({success:false,err:'no user updated'})
            }
        }
    )
    
});

router.get('/test',(req,res)=>{
    let query = {
        createdby:"t@t.com",
        expiry: {
            $gte: moment.utc().add(5,'hours').toDate(),
        }   
    };

    Bundle.find(
        query,
        null,
        {
            sort:{
                created:-1
            }
        },
        (err,docx)=>{
            res.json({
                success:true,
                data:docx
            });
        });


});

router.get('/:email',(req,resp)=>{
    let query = {
        createdby:req.params.email,
        expiry: {
            $gte: moment.utc().add(5,'hours').toDate(),
        }   
    };
    Bundle.find(query,null,{sort:{created:-1}},(err,doc)=>{
        if(err){
            throw err;
        }else{
            //console.log(doc);
            resp.json({
                success:true,
                data:doc
            });
        }
    });
});



router.get('/credit/:email',(req,resp)=>{
    let query = {from:'sa@mangotree.com',to:req.params.email};
    Credit.find(query,null,{sort:{created:-1}},(err,doc)=>{
        if(err){
            throw err;
        }else{
            //console.log(doc);
            resp.json({
                success:true,
                data:doc
            });
        }
    });
});

router.delete('/:id',(req,resp)=>{
    let query = {_id:req.params.id};
    Bundle.remove(query,(err)=>{
        if(err){
            resp.json({
                success:false,
                msg:'The bundle was not deleted'
            });
        }else{
            resp.json({
                success:true,
                msg:'The bundle was deleted'
            });
        }
    });
});


router.get('/all/pending',(req,resp)=>{
    let query={
        payment:false
    }
    Bundle.find(query,null,{sort:{created:-1}},(err,doc)=>{
        if(err){
            throw err;
        }
        if(doc){
            resp.json({
                success:true,
                data:doc
            });
        }
        else{
            //console.log(doc);
            resp.json({
                success:false,
                err:'no items'
            });
        }
    });
});

router.put('/receive',(req,res)=>{
    let bundleid = req.body.id;

    Bundle.findOneAndUpdate(
        {
            _id:bundleid
        },
        {
            $set:{
                payment:true,
                status:'activated'
            }
        },
        {
            new:true
        },
        function(err,bundle){
            if(err){
                res.json({
                    success:false,
                    error:err
                })
            }
            if(bundle){

                User.findOne({email:bundle.createdby},(err,docx)=>{
                    
                    docx.expirybundle = bundle.expiry;
                    docx.encryption = bundle.encryption;
                    docx.smstp = bundle.smstp;
                    docx.watp = bundle.watp;

                    let rights = bundle.featureset.toString() + ',reporting,contacts,tracker,pricing,settings' ;

                    docx.rights = rights.trim().split(',');

                    docx.save(function(err){
                        if(err){
                            res.json({
                                success:false,
                                err:err
                            });
                        }else{

                            let query = {
                                parents:{
                                    $in: bundle.createdby
                                }
                            };
                            User.updateMany(
                                query,
                                {
                                    $set : {
                                        expirybundle:bundle.expiry,
                                        encryption:bundle.encryption,
                                        smstp:bundle.smstp,
                                        watp:bundle.watp,
                                        rights:'contacts,tracker'.trim().split(',')
                                    }
                                },
                                (err,raw)=>{
                                    if(err){
                                        res.json({
                                            success:false,
                                            err:err
                                        });
                                    }else{
                                        res.json({
                                            success:true,
                                            bundle:bundle
                                        });
                                    }
                                }
                            );
                        }
                    })
                });

            }else{
                res.json({
                    success:false,
                    error:'not found'
                })
            }
        }
    )    
})


router.get('/credit/all/pending',(req,resp)=>{
    let query={
        payment:false,
        from:'sa@mangotree.com'
    }
    Credit.find(query,null,{sort:{created:-1}},(err,doc)=>{
        if(err){
            throw err;
        }
        if(doc){
            resp.json({
                success:true,
                data:doc
            });
        }
        else{
            //console.log(doc);
            resp.json({
                success:false,
                err:'no items'
            });
        }
    });
});

router.put('/credit/receive',(req,res)=>{
    let creditid = req.body.id;

    Credit.findOneAndUpdate(
        {
            _id:creditid
        },
        {
            $set:{
                payment:true
            }
        },
        {
            new:true
        },
        function(err,credit){
            if(err){
                res.json({
                    success:false,
                    error:err
                })
            }
            if(credit){

                User.findOne({email:credit.createdby},(err,docx)=>{
                    
                    docx.creditsms = docx.creditsms + credit.smscredit;
                    docx.creditwhatsapp = docx.creditwhatsapp + credit.whatsappcredit;

                    docx.save(function(err){
                        if(err){
                            res.json({
                                success:false,
                                err:err
                            });
                        }else{
                            res.json({
                                success:true
                            });
                        }
                    })
                });

            }else{
                res.json({
                    success:false,
                    error:'not found'
                })
            }
        }
    )    
})

router.get('/dump/:query',(req,res)=>{
    var obj = JSON.parse(req.params.query);
    Bundle.find(
        {
            created: {
                $lte: moment.utc(obj.dateto).endOf('day').toDate(),
                $gte: moment.utc(obj.datefrom).startOf('day').toDate()
            }
        },
        (err,docx)=>
        {
            if(err){
                res.json({
                    success:false,
                    error:err
                })
            }
            if(docx){
                res.json({
                    success:true,
                    data:docx
                })
            }else{
                res.json({
                    success:false,
                    error:err
                })
            }
        }
    )
});

router.get('/credit/dump/:query',(req,res)=>{
    var obj = JSON.parse(req.params.query);
    Credit.find(
        {
            created: {
                $lte: moment.utc(obj.dateto).endOf('day').toDate(),
                $gte: moment.utc(obj.datefrom).startOf('day').toDate()
            }
        },
        (err,docx)=>
        {
            if(err){
                res.json({
                    success:false,
                    error:err
                })
            }
            if(docx){
                res.json({
                    success:true,
                    data:docx
                })
            }else{
                res.json({
                    success:false,
                    error:err
                })
            }
        }
    )
});



//export
module.exports = router;