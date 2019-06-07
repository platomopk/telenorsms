const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Mask = require('../models/mask');
const Useraccess = require('../models/useraccess');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
const nodemailer = require("nodemailer");

var CryptoJS = require("crypto-js");

router.delete('/:id',(req,resp)=>{
    let query = {_id:req.params.id};
    User.remove(query,(err)=>{
        if(err){
            resp.json({
                success:false,
                msg:'The child was not deleted'
            });
        }else{
            resp.json({
                success:true,
                msg:'The child was deleted'
            });
        }
    });
});

router.get('/childs/:parentemail',(req,res)=>{
    let query = {parent:req.params.parentemail};
    let data = {};
    User.find(query,(err,resp)=>{
        data = resp;
        res.send({
            success:true,
            data:data
        });
    });
});

router.get('/',(req,res)=>{
    let query = {isactivated:true,email:{$ne:'sa@mangotree.com'}};
    let data = {};
    User.find(query,{password:false,rights:false,parents:false,_id:false},{sort:{created:-1}},(err,resp)=>{
        data = resp;
        res.send({
            success:true,
            data:data
        });
    });
});

router.get('/salesmen',(req,res)=>{
    User.find(
        {
            type:"sales"
        },
        {
            fullname:1,
            email:1,
            type:1
        },
        (err,docx)=>{
            if(err){
                res.json({success:false,error:err})
            }else{
                res.json({success:true,data:docx})
            }
        }
    )
});


// new layered childs
router.get('/childs/new/:parentemail',(req,res)=>{
    let query = {
        parents:{
            $in: req.params.parentemail
        }
    };
    
    let data = {};
    let childs = [];
    
    User.find(query,(err,resp)=>{
        data = resp;
        res.send({
            success:true,
            data:data
        });
    });
});

router.get('/all/:email',(req,res)=>{
    let encemail = req.params.email;
    // CryptoJS.AES.encrypt(msg.trim(),req.body.createdby.trim()).toString();
    
    User.find({type:"telco"},{fullname:1,email:1},(err,docx)=>{
        docx.forEach(element => {
            element.email = CryptoJS.AES.encrypt(element.email.trim(),encemail.trim()).toString();
        });
        res.send({
            success:true,
            data:docx
        });
    });
});

router.get('/dump/:query',(req,res)=>{
    var obj = JSON.parse(req.params.query);
    User.find({
        created: {
            $lte: moment.utc(obj.dateto).endOf('day').toDate(),
            $gte: moment.utc(obj.datefrom).startOf('day').toDate()
        }
    },
        (err, docs) => {
            if (err) {
                res.json({
                    success: false,
                    error: err
                });
            }
            //console.log(quick);
            res.json({
                success: true,
                data: docs
            });
        });
});

router.put('/rights',(req,resp)=>{
    var rights = req.body.rights;
    var email = req.body.email;
    var isdelegate = req.body.isdelegate;

    //console.log(rights);

    let query = {email:email};
    let data = {};
    User.findOne(query,(err,doc)=>{

        doc.rights = rights;
        doc.isdelegate = isdelegate;

        doc.save(function(err){
            if(err){
                resp.json({
                    success:false,
                    msg:'Rights were not updated'
                });
            }else{
                resp.json({
                    success:true,
                    msg:'Rights updated successfully'
                });
            }
        });
    });
});

router.get('/rights/:email',(req,res)=>{
    let query = {email:req.params.email};
    let data = {};
    User.find(query,(err,resp)=>{
        data = resp;
        res.send({
            success:true,
            data:data
        });
    });
});

router.delete('/delete/:id',(req,res)=>{
    User.findOneAndDelete(
        {
            _id:req.params.id
        },
        (err,resp)=>{
            if(err){
                res.json({success:false,error:err})
            }else{
                res.json({success:true,data:"User Deleted"});
            }
        }
    )
})

//register
router.post('/register', (req, res)=>{

    if(req.body.sentby === "admin"){
        let newUser = new User({
            enckey:req.body.enckey,
            salesemail:req.body.salesemail,
            fullname: req.body.fullname,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
            rights:req.body.rights,
            isparent:req.body.isparent,
            isdelegate:req.body.isdelegate,
            parent:req.body.parent,
            parents:req.body.parents,
            type:req.body.type,
            creditsms:req.body.creditsms,
            creditwhatsapp:req.body.creditwhatsapp,
            issuspended:req.body.issuspended,
            expirybundle:req.body.expirybundle,
            smstp:req.body.smstp,
            watp:req.body.watp,
            isactivated:req.body.isactivated,
            encryption:req.body.encryption,
            created:moment.utc().add(5,'hours').toDate()
        });
    
        User.addUser(newUser, (err,user)=>{
            if(err){
                res.json({success:false,error:"Failed to register user.\n\n"+err});
            }else{
                let newMask = new Mask({
                    mask: 'default',
                    description:'This is the default whitelisted mask for all networks.',
                    type:'whitelisted',
                    createdby:req.body.email,
                    created:moment.utc().add(5,'hours').toDate(),
                    status:'activated'
                });
                newMask.save((err,mask)=>{
                    if(err){
                        res.json({
                            success:false,
                            error:err
                        });
                    }else{
                        res.json({success:true, msg:"User registered"});
                    }
                });
            }
        });
    }else{
        if(req.body.action == "createchild"){

            let newUser = new User({
                enckey:req.body.enckey,
                salesemail:req.body.salesemail,
                fullname: req.body.fullname,
                email:req.body.email,
                phone:req.body.phone,
                password:req.body.password,
                rights:req.body.rights,
                isparent:req.body.isparent,
                isdelegate:req.body.isdelegate,
                parent:req.body.parent,
                parents:req.body.parents,
                type:req.body.type,
                creditsms:req.body.creditsms,
                creditwhatsapp:req.body.creditwhatsapp,
                issuspended:req.body.issuspended,
                expirybundle:req.body.expirybundle,
                smstp:req.body.smstp,
                watp:req.body.watp,
                isactivated:req.body.isactivated,
                encryption:req.body.encryption,
                created:moment.utc().add(5,'hours').toDate()
            });
        
            User.addUser(newUser, (err,user)=>{
                if(err){
                    res.json({success:false,error:"Failed to register user.\n\n"+err});
                }else{
                    let newMask = new Mask({
                        mask: 'default',
                        description:'This is the default whitelisted mask for all networks.',
                        type:'whitelisted',
                        createdby:req.body.email,
                        created:moment.utc().add(5,'hours').toDate(),
                        status:'activated'
                    });
                    newMask.save((err,mask)=>{
                        if(err){
                            res.json({
                                success:false,
                                error:err
                            });
                        }else{
                            res.json({success:true, msg:"User registered"});
                        }
                    });
                }
            });

        }else{
            User.findOne(
                {
                    email:req.body.salesemail,
                    type:'sales'
                },
                (err,doc)=>{
                    if(err){
                        res.json({success:false,error:err+"\n\nSales Executive not found."})
                    }
        
        
                    if(doc!=null){
                        let newUser = new User({
                            enckey:req.body.enckey,
                            salesemail:req.body.salesemail,
                            fullname: req.body.fullname,
                            email:req.body.email,
                            phone:req.body.phone,
                            password:req.body.password,
                            rights:req.body.rights,
                            isparent:req.body.isparent,
                            isdelegate:req.body.isdelegate,
                            parent:req.body.parent,
                            parents:req.body.parents,
                            type:req.body.type,
                            creditsms:req.body.creditsms,
                            creditwhatsapp:req.body.creditwhatsapp,
                            issuspended:req.body.issuspended,
                            expirybundle:req.body.expirybundle,
                            smstp:req.body.smstp,
                            watp:req.body.watp,
                            isactivated:req.body.isactivated,
                            encryption:req.body.encryption,
                            created:moment.utc().add(5,'hours').toDate()
                        });
                    
                        User.addUser(newUser, (err,user)=>{
                            if(err){
                                res.json({success:false,error:"Failed to register user.\n\n"+err});
                            }else{
                                let newMask = new Mask({
                                    mask: 'default',
                                    description:'This is the default whitelisted mask for all networks.',
                                    type:'whitelisted',
                                    createdby:req.body.email,
                                    created:moment.utc().add(5,'hours').toDate(),
                                    status:'activated'
                                });
                                newMask.save((err,mask)=>{
                                    if(err){
                                        res.json({
                                            success:false,
                                            error:err
                                        });
                                    }else{
                                        let transporter = nodemailer.createTransport({
                                            host: 'smtp.gmail.com',
                                            port: 465,
                                            secure: true,
                                            auth: {
                                                // should be replaced with real sender's account
                                                user: 'mangotreepkpl@gmail.com',
                                                pass: 'Pakistan@1234'
                                            }
                                        });
                                        let mailOptions = {};
                                        if(req.body.type == "omo"){
                                            mailOptions = {
                                                // should be replaced with real recipient's account
                                                to: req.body.email,
                                                subject: "New Account Creation - MangoTree",
                                                html: `Dear ${req.body.fullname},<br><br>You have successfully created a new account. Please wait while we verify your account at our end. It can take up to 2 working days.<br><br>Your control panel url is https://mangotreepk.herokuapp.com/omo/login <br>Your login email is: ${req.body.email} <br>Your login password is: ${req.body.password} <br><br>Best Regards,<br>MangoTree Team`
                                            };
                                        }else{
                                            console.log(req.body.email,req.body.fullname,req.body.password)
                                            mailOptions = {
                                                // should be replaced with real recipient's account
                                                to: req.body.email,
                                                subject: "New Account Creation - MangoTree",
                                                html: `Dear ${req.body.fullname},<br><br>You have successfully created a new account. Please wait while we verify your account at our end. It can take up to 2 working days.<br><br>Your control panel url is https://mangotreepk.herokuapp.com/home/login <br>Your login email is: ${req.body.email} <br>Your login password is: ${req.body.password} <br><br>Best Regards,<br>MangoTree Team`
                                            };
                                        }

                                        
                                        transporter.sendMail(mailOptions, (error, info) => {
                                            if (error) {
                                                return console.log(error);
                                            }
                                            
                                            console.log('Message %s sent: %s', info.messageId, info.response);
                                        });
                                        res.json({success:true, msg:"User registered"});
                                    }
                                });
                            }
                        });
                    }else{
                            res.json({success:false,error:"Sales Executive not found."})
        
                    }
                }
            );
        }
    }




});

router.get('/pending',(req,res)=>{
    User.find(
        {
            isactivated:false
        },
        null,
        {
            sort:{
                created:-1
            }
        },
        (err,docx)=>{
            if(err){
                res.json({
                    success:false,
                    error:'No users found.'
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
                    error:'No users found.'
                })
            }
        }
    )
});


//authenticate
router.post('/authenticate', (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err,user)=>{
        if(err){
            throw err;
        }

        if(!user){
            return res.json({success:false, msg:'user not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch)=>{
            
            if(err) throw err;
            if(isMatch){

                

                //create token
                const token = jwt.sign(user.toJSON(),config.secret,{
                    expiresIn:86400 //1 day in seconds
                });


                res.json({
                    success:true,
                    token:'bearer '+token,
                    user:{
                        id:user._id,
                        fullname:user.fullname,
                        email:user.email,
                        rights:user.rights,
                        type:user.type,
                        parent:user.parent,
                        delegate:user.isdelegate,
                        parents:user.parents,
                        salesemail:user.salesemail,
                        enckey:user.enckey
                    },
                    activated:user.isactivated,
                    suspended:user.issuspended
                });
            }else{
                return res.json({success:false, msg:'wrong password'});
            }
        });
    });
});

//profile protected route
router.get('/profile', passport.authenticate('jwt',{session:false}), (req, res, next)=>{
    res.send(req.user);
});

router.get('/balance/:email',(req,res)=>{
    let email = req.params.email;
    User.findOne({email:email},(err,docx)=>{
        if(err){
            res.json({success:false,err:err});
        }
        if(docx){
            res.json({success:true,data:docx});
        }else
        {
            res.json({success:false,err:'Not Found'});
        }
        
    })
});

router.post('/balance',(req,res)=>{
    var email = req.body.email;

    User.findOne(
        {
            email:email
        },
        (err,docx)=>{
            if(err){
                res.json({
                    success:false,
                    error:err
                })
            }
            if(docx!=null){
                res.json({
                    success:true,
                    data:docx
                })
            }else{
                res.json({
                    success:false,
                    error:"User not found."
                })
            }
        }
    )
});

//profileupdate
router.put('/profile', (req, res, next)=>{
    //res.send("Register");
    let user = {
        fullname: req.body.fullname,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password,
        id:req.body.id,
        ufone:req.body.ufone,
        telenor:req.body.telenor,
        zong:req.body.zong,
        jazz:req.body.jazz,
        warid:req.body.warid
        
    };

    let query = {_id:user.id};

    User.findOne(query,function(err,doc){
        if(!doc)
            return next(new Error('Could not load document'));
        else{
            //console.log(doc);
            doc.fullname = user.fullname;
            doc.phone = user.phone;

            doc.ufone = user.ufone;
            doc.telenor = user.telenor;
            doc.zong = user.zong;
            doc.jazz = user.jazz;
            doc.warid =  user.warid;

            if(user.password == undefined){
                //retain the older one
                user.password = doc.password;

                doc.save(function(err){
                    if(err){
                        res.json({success:false,msg:"User was not updated"});
                    }else{
                        // generate the updated token
                        const token = jwt.sign(user,config.secret,{
                            expiresIn:604800 //1 week in seconds
                        });
    
                        // send the updated token alongwith the request
                        res.json({success:true,msg:'User was updated',token:'bearer '+token, user:user});
                    }
                });
                // password was not changed
            }else{
                // password was changed
                bcrypt.genSalt(10, (err,salt)=>{
                    bcrypt.hash(user.password,salt,(err,hash)=>{
                        if(err){
                            throw err;
                            //res.json({success:false,msg:err});
                        }else{
                            //res.json({success:false,msg:err});
                            doc.password = hash;
                            user.password = hash;

                            //newUser.save(callback);
                            doc.save(function(err){
                                if(err){
                                    res.json({success:false,msg:"User was not updated"});
                                }else{
                                    // generate the updated token
                                    const token = jwt.sign(user,config.secret,{
                                        expiresIn:604800 //1 week in seconds
                                    });
                
                                    // send the updated token alongwith the request
                                    res.json({success:true,msg:'User was updated',token:'bearer '+token, user:user});
                                }
                            });
                        }
                        
                    });
                });
                //doc.password = user.password;
            }

        }
    });


    // User.update(query,)

    // console.log(user);



    // User.addUser(newUser, (err,user)=>{
    //     if(err){
    //         res.json({success:false,msg:"Failed to register user."})
    //     }else{
    //         res.json({success:true, msg:"User registered"})
    //     }
    // });
});


router.put('/manipulate',(req,res)=>{

    User.updateOne(
        {
            email:req.body.email
        },
        {
            $set:{
                "issuspended":req.body.issuspended
            }
        },
        (err,raw)=>{
            if(err){
                res.json({success:false,err:err})
            }
            res.json({success:true,data:raw})
        }
    );
    
});

router.put('/activate',(req,res)=>{


    User.updateOne(
        {
            email:req.body.email
        },
        {
            $set:{
                "isactivated":true
            }
        },
        (err,raw)=>{
            if(err){
                res.json({success:false,err:err})
            }
            res.json({success:true,data:raw})
        }
    );
    
});

router.put('/resetpassword',(req,res)=>{

    var email = req.body.email;
    

    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            res.json({success:false,err:err})
        }
        bcrypt.hash("123456",salt,(err,hash)=>{
            if(err){
                res.json({success:false,err:err})
            }
            User.updateOne(
                {
                    email:email
                },
                {
                    $set:{
                        "password":hash
                    }
                },
                (err,raw)=>{
                    if(err){
                        res.json({success:false,err:err})
                    }
                    res.json({success:true,data:raw})
                }
            )

        });
    });


});



//export
module.exports = router;