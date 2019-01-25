const express = require('express');
const router = express.Router();
const Mask = require('../models/mask');
var multer = require('multer');

const Quick = require('../models/quick');
const Drip = require('../models/drip');
const Bulk = require('../models/bulk');
const Campaignm = require('../models/campaignm');
const Templatem = require('../models/templatem');

const Contact = require('../models/contact');

const Hybrid = require('../models/hybrid');

const config = require('../config/database');
const bcrypt = require('bcryptjs');

const async = require('async');
var soap = require('soap');

var path = require('path');

var await = require('asyncawait/await');

var csv = require('fast-csv');
const Moment = require('moment');
// var momentrrange =  require('moment-range');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

// ---------------------------
var DIR = './uploads/';
var upload = multer({dest: DIR}).single('photo');

const FCM = require('fcm-node');
const serverKey = 'AAAAX3R4DcU:APA91bEW7bnDNZ1keueAF9o1GmMKCKQd9C2QOT9dZ9KdeCFNhoXPxqE5aRa1QT31cQHEdAs1e4sIqdf-cBaWhP7knk7tATjBySgHbdScc4T6KuP0jZL7_TPiL1eHr2Au72SI5-MMRJAl';
var fcm = new FCM(serverKey);



// --------------------------------------------------------

router.post('/register',(req,res)=>{
    
        var name = req.body.name;
        var masking = req.body.masking;
        var language = req.body.language;
        var msg = req.body.msg;
        var locking = req.body.locking;
        var createdby = req.body.createdby;
        var created = new Date().toLocaleDateString("en-US");
        var account = req.body.account;
        var password = req.body.password;

        var mobilenos = [];
        var tokens = [];

        if(locking == "enabled"){
            // send bulk as well as notification
            Contact.find({},(err,doc)=>{
                if(err){
                    console.log(err);
                }else{
                    // populate the arrays of mobilenos and tokens from contacts db
                    doc.forEach(function(element) {
                        mobilenos.push(element.phone);
                        tokens.push(''+element.token);
                    }, this);

                    // console.log(mobilenos.toString());
                    // console.log(tokens.toString());

                    // send a bulk request
                    var url ='http://cbs.zong.com.pk/ReachCWSv2/CorporateSmsV3.asmx?wsdl';
                    var bulksms =
                    {
                        'objBulkSms':
                            {
                                'LoginId':account,
                                'LoginPassword':password,
                                'CampaignName':name,
                                'Mask':masking,
                                'Message':msg,
                                'UniCode':'0',
                                'NumberCsv':mobilenos.toString(),
                                'CampaignDate':moment().format('MM/DD/YYYY hh:mm:ss a'),
                                'ShortCodePrefered':'n'
                            }
                    }
                    soap.createClient(url,function(err,client){
                        client.BulkSmsv3(bulksms,function(err,result){
                            if(err){
                                console.log(err);
                            }else{
                                var str = result.BulkSmsv3Result;
                                if(str.indexOf("Successfully")>0){
                                    console.log(str);
                                    //attempt notification
                                    // var ids = [
                                    //     'flFfxmRFC48:APA91bFvHlupm0u852F6PPBzDTTThMz_wbzdpVM3Gj5vAXP9c2s7I9efVXJ2W7cA_9cF4fP9cB1hwt6ptisnYr0Eoy4oATyMglMPkqmXZDzwZEr3tTbe-7S1o5F9RD7BVO9iqwY8kNoOEP6BOudWhnWTKU0LH5mWQQ',
                                    //     'flFfxmRFC48:APA91bFvHlupm0u852F6PPBzDTTThMz_wbzdpVM3Gj5vAXP9c2s7I9efVXJ2W7cA_9cF4fP9cB1hwt6ptisnYr0Eoy4oATyMglMPkqmXZDzwZEr3tTbe-7S1o5F9RD7BVO9iqwY8kNoOEP6BOudWhnWTKU0LH5mWQQ'
                                    // ]
                                    var message = {
                                        // to:'flFfxmRFC48:APA91bFvHlupm0u852F6PPBzDTTThMz_wbzdpVM3Gj5vAXP9c2s7I9efVXJ2W7cA_9cF4fP9cB1hwt6ptisnYr0Eoy4oATyMglMPkqmXZDzwZEr3tTbe-7S1o5F9RD7BVO9iqwY8kNoOEP6BOudWhnWTKU0LH5mWQQ',//single
                                        registration_ids:tokens,//multiple
                                        notification:{
                                            title:'MangoTree',
                                            body:msg
                                        }
                                    }
                                
                                    fcm.send(message,function(err,response){
                                        if (err) {
                                            console.log("Something has gone wrong!");
                                            res.json({
                                                success:false,
                                                error:err
                                            })
                                        } else {
                                            console.log("Successfully sent with response: ", response);
                                            var responses = JSON.parse(response);
                                            console.log(responses.success);
                                            if(responses.success == 1){
                                                let hybrid = new Hybrid({
                                                    name:name,
                                                    masking:masking,
                                                    language:language,
                                                    msg:msg,
                                                    locking:locking,
                                                    createdby:createdby,
                                                    created:created,
                                                    numbers:mobilenos,
                                                    tokens:tokens
                                                });

                                                hybrid.save((err,hybriddoc)=>{
                                                    if(err){
                                                        res.json({
                                                            success:false
                                                        });
                                                    }else{
                                                        res.json({
                                                            success:true
                                                        });
                                                    }
                                                });
                                            }
                                        }
                                    });



                                }else{
                                    console.log(str);
                                    res.json({
                                        success:false,
                                        error:str
                                    })
                                }                    
                            }
                        })
                    });

                }
            });

        }else{
            // send bulk or notification
            Contact.find({},(err,doc)=>{
                if(err){
                    console.log(err);
                }else{
                    // populate the arrays of mobilenos and tokens from contacts db
                    doc.forEach(function(element) {
                        if(element.token!=''){
                            tokens.push(''+element.token);
                        }else{
                            mobilenos.push(element.phone);
                        }
                        
                        
                    }, this);

                    // console.log(mobilenos.toString());
                    // console.log(tokens.toString());

                    if(tokens.length>0){
                        // send a bulk request
                        var url ='http://cbs.zong.com.pk/ReachCWSv2/CorporateSmsV3.asmx?wsdl';
                        var bulksms =
                        {
                            'objBulkSms':
                                {
                                    'LoginId':account,
                                    'LoginPassword':password,
                                    'CampaignName':name,
                                    'Mask':masking,
                                    'Message':msg,
                                    'UniCode':'0',
                                    'NumberCsv':mobilenos.toString(),
                                    'CampaignDate':moment().format('MM/DD/YYYY hh:mm:ss a'),
                                    'ShortCodePrefered':'n'
                                }
                        }
                        soap.createClient(url,function(err,client){
                            client.BulkSmsv3(bulksms,function(err,result){
                                if(err){
                                    console.log(err);
                                }else{
                                    var str = result.BulkSmsv3Result;
                                    console.log(str);

                                    var message = {
                                        // to:'flFfxmRFC48:APA91bFvHlupm0u852F6PPBzDTTThMz_wbzdpVM3Gj5vAXP9c2s7I9efVXJ2W7cA_9cF4fP9cB1hwt6ptisnYr0Eoy4oATyMglMPkqmXZDzwZEr3tTbe-7S1o5F9RD7BVO9iqwY8kNoOEP6BOudWhnWTKU0LH5mWQQ',//single
                                        registration_ids:tokens,//multiple
                                        notification:{
                                            title:'MangoTree',
                                            body:msg
                                        }
                                    }
                                
                                    fcm.send(message,function(err,response){
                                        if (err) {
                                            console.log("Something has gone wrong!");
                                            res.json({
                                                success:false,
                                                error:err
                                            })
                                        } else {
                                            console.log("Successfully sent with response: ", response);
                                            var responses = JSON.parse(response);
                                            console.log(responses.success);
                                            if(responses.success == 1){
                                                let hybrid = new Hybrid({
                                                    name:name,
                                                    masking:masking,
                                                    language:language,
                                                    msg:msg,
                                                    locking:locking,
                                                    createdby:createdby,
                                                    created:created,
                                                    numbers:mobilenos,
                                                    tokens:tokens
                                                });

                                                hybrid.save((err,hybriddoc)=>{
                                                    if(err){
                                                        res.json({
                                                            success:false
                                                        });
                                                    }else{
                                                        res.json({
                                                            success:true
                                                        });
                                                    }
                                                });
                                            }
                                        }
                                    });


                                }
                            })
                        });
                    }else if(mobilenos.length>0){
                        var message = {
                            // to:'flFfxmRFC48:APA91bFvHlupm0u852F6PPBzDTTThMz_wbzdpVM3Gj5vAXP9c2s7I9efVXJ2W7cA_9cF4fP9cB1hwt6ptisnYr0Eoy4oATyMglMPkqmXZDzwZEr3tTbe-7S1o5F9RD7BVO9iqwY8kNoOEP6BOudWhnWTKU0LH5mWQQ',//single
                            registration_ids:tokens,//multiple
                            notification:{
                                title:'MangoTree',
                                body:msg
                            }
                        }
                    
                        fcm.send(message,function(err,response){

                            // send a bulk request
                            var url ='http://cbs.zong.com.pk/ReachCWSv2/CorporateSmsV3.asmx?wsdl';
                            var bulksms =
                            {
                                'objBulkSms':
                                    {
                                        'LoginId':account,
                                        'LoginPassword':password,
                                        'CampaignName':name,
                                        'Mask':masking,
                                        'Message':msg,
                                        'UniCode':'0',
                                        'NumberCsv':mobilenos.toString(),
                                        'CampaignDate':moment().format('MM/DD/YYYY hh:mm:ss a'),
                                        'ShortCodePrefered':'n'
                                    }
                            }
                            soap.createClient(url,function(err,client){
                                client.BulkSmsv3(bulksms,function(err,result){
                                    if(err){
                                        console.log(err);
                                    }else{
                                        var str = result.BulkSmsv3Result;
                                        if(str.indexOf("Successfully")>0){
                                            let hybrid = new Hybrid({
                                                name:name,
                                                masking:masking,
                                                language:language,
                                                msg:msg,
                                                locking:locking,
                                                createdby:createdby,
                                                created:created
                                            });

                                            hybrid.save((err,hybriddoc)=>{
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
                                            });
                                        }else{
                                            res.json({
                                                success:false,
                                                err:err
                                            });
                                        }

                                    }
                                })
                            });
                            
                            
                        });
                    }



                }
            });
        }



        
        

});

router.get('/:email',(req,resp)=>{
    
    let query = {createdby:req.params.email};
    Hybrid.find(query,(err,doc)=>{
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
    
router.delete('/:name',(req,resp)=>{
    let query = {name:req.params.name};
    Hybrid.remove(query,(err)=>{
        if(err){
            resp.json({
                success:false,
                msg:'The hybrid was not deleted'
            });
        }else{
            resp.json({
                success:true,
                msg:'The hybrid was deleted'
            });
        }
    });
});
  
    


//export
module.exports = router;