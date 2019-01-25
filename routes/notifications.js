const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const Group = require('../models/group');
const Templaten = require('../models/templaten');
const Campaignn = require('../models/campaignn');
const Notification = require('../models/notification');

const config = require('../config/database');
const bcrypt = require('bcryptjs');
const  mongoose = require('mongoose');

const FCM = require('fcm-node');
const serverKey = 'AAAAX3R4DcU:APA91bEW7bnDNZ1keueAF9o1GmMKCKQd9C2QOT9dZ9KdeCFNhoXPxqE5aRa1QT31cQHEdAs1e4sIqdf-cBaWhP7knk7tATjBySgHbdScc4T6KuP0jZL7_TPiL1eHr2Au72SI5-MMRJAl';
var fcm = new FCM(serverKey);


router.post('/templates/register', (req, res, next)=>{
    //res.send("Register");
    let newTemplate = new Templaten({
        type: req.body.type,
        name:req.body.name,
        desc:req.body.desc,
        createdby:req.body.createdby,
        created:new Date().toLocaleDateString("en-US")
    });

    newTemplate.save((err,template)=>{
        if(err){
            throw err;
        }else{
            res.json({
                success:true,
                template:template
            });
        }
    });
});

router.get('/templates/:email',(req,resp)=>{
    let query = {createdby:req.params.email};
    var response = {};
    Templaten.find(query,(err,doc)=>{
        if(err){
            throw err;
        }else{

            resp.json({
                success:true,
                data:doc
            });
        }
    });
});

router.delete('/templates/:id',(req,resp)=>{
    let query = {_id:req.params.id};
    Templaten.remove(query,(err)=>{
        if(err){
            resp.json({
                success:false,
                msg:'The template was not deleted'
            });
        }else{
            resp.json({
                success:true,
                msg:'The template was deleted'
            });
        }
    });
});

// notifications
router.post('/campaigns/register', (req, res, next)=>{
    //res.send("Register");
    let newCampaign = new Campaignn({
        preference: req.body.preference,
        topic: req.body.topic,
        name:req.body.name,
        category: req.body.category,
        language: req.body.language,
        message: req.body.message,
        createdby:req.body.createdby,
        created:new Date().toLocaleDateString("en-US")
    });

    newCampaign.save((err,campaign)=>{
        if(err){
            res.json({
                success:false
            });
        }else{
            var usersArr =[];

            var campaignID = campaign._id;

            // promises
            Contact.find({}).exec().then(function(contacts){
                contacts.forEach(function(contacts) {
                    let user = {
                        user: ''+contacts._id,
                        token:''+contacts.token,
                        username:''+contacts.fullname,
                        userphone:''+contacts.phone,
                        useremail:''+contacts.email,
                        usergender:''+contacts.gender,
                        seen:'0',
                        ack:'0',
                        reported:'0',
                        reportmsg:'',
                        reportedat:''
                    };

                    usersArr.push(user);
                }, this);

                // wait for the array to be filled
                return Promise.all(usersArr);
                //console.log(contacts);
            }).then(function(list){
                // now we have the notifications data
                //console.log(list);
                let newNoti = {
                    campaign: ''+campaignID,
                    name:''+campaign.name,
                    category:''+campaign.category,
                    language:''+campaign.language,
                    message:''+campaign.message,
                    payload:list,
                    createdby:newCampaign.createdby,
                    created: new Date().toLocaleDateString("en-US"),
                };

                //console.log(user);


                Notification.collection.insert(newNoti,(err,docs)=>{
                    if(err){
                        console.log(err);
                    }else{
                        var message = {
                            to:'flFfxmRFC48:APA91bFvHlupm0u852F6PPBzDTTThMz_wbzdpVM3Gj5vAXP9c2s7I9efVXJ2W7cA_9cF4fP9cB1hwt6ptisnYr0Eoy4oATyMglMPkqmXZDzwZEr3tTbe-7S1o5F9RD7BVO9iqwY8kNoOEP6BOudWhnWTKU0LH5mWQQ',//single
                            //registration_ids:ids,//multiple
                            notification:{
                                title:'MangoTree',
                                body:newCampaign.message
                            }
                            ,
                            // data:{
                            //     key:'val1',
                            //     key2:'val2'
                            // }
                        }
                    
                        fcm.send(message,function(err,response){
                            if (err) {
                                console.log("Something has gone wrong!");
                            } else {
                                res.json({
                                    success:true,
                                    campaign:campaign,
                                    notification:docs
                                });
                                console.log("Successfully sent with response: ", response);
                            }
                        });
                        // push list get all the tokens and send notification from here list
                        

                        //get campaign names and id and msg from campaign
                        // campaign._id,category,language,message,created
                        // console.log(campaign);

                        // get tokens from the following list
                        //console.log(list);


                        // send push notification




                    }
                });


            }).catch(function(error) {
                console.log(error);
            });

            


            
        }
    });
});

router.get('/push',(req,res)=>{
    var ids = [
        'flFfxmRFC48:APA91bFvHlupm0u852F6PPBzDTTThMz_wbzdpVM3Gj5vAXP9c2s7I9efVXJ2W7cA_9cF4fP9cB1hwt6ptisnYr0Eoy4oATyMglMPkqmXZDzwZEr3tTbe-7S1o5F9RD7BVO9iqwY8kNoOEP6BOudWhnWTKU0LH5mWQQ',
        'flFfxmRFC48:APA91bFvHlupm0u852F6PPBzDTTThMz_wbzdpVM3Gj5vAXP9c2s7I9efVXJ2W7cA_9cF4fP9cB1hwt6ptisnYr0Eoy4oATyMglMPkqmXZDzwZEr3tTbe-7S1o5F9RD7BVO9iqwY8kNoOEP6BOudWhnWTKU0LH5mWQQ'
    ]
    var message = {
        // to:'flFfxmRFC48:APA91bFvHlupm0u852F6PPBzDTTThMz_wbzdpVM3Gj5vAXP9c2s7I9efVXJ2W7cA_9cF4fP9cB1hwt6ptisnYr0Eoy4oATyMglMPkqmXZDzwZEr3tTbe-7S1o5F9RD7BVO9iqwY8kNoOEP6BOudWhnWTKU0LH5mWQQ',//single
        registration_ids:ids,//multiple
        notification:{
            title:'Title',
            body:'Body'
        }
        ,
        // data:{
        //     key:'val1',
        //     key2:'val2'
        // }
    }

    fcm.send(message,function(err,response){
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
            res.send("successful.");
        }
    });
})


router.get('/:email',(req,resp)=>{
    let query = 
    {
        // $and:[
        //     {createdby:req.params.email},
        //     {'payload.reported':{$eq:"0"}}
        // ]

        createdby:req.params.email
        
    };
    var response = {};
    Notification.find(query,(err,doc)=>{
        if(err){
            throw err;

            console.log(err);
        }else{
            console.log(doc);
            resp.json({
                success:true,
                data:doc
            });
        }
    });
});

router.get('/reported/:id',(req,resp)=>{
    // get all reported where notificationid is above and reported flag is 1
    let query = 
    {
        $and:[
            {_id:req.params.id},
            {'payload.reported':{$eq:"1"}}
        ]
       
    };

    Notification.find(query).exec()
    .then(function(notification){
        resp.send(notification);
    }).catch(function(err){
        console.log(err);
    });



    // Notification.find(query,(err,doc)=>{
    //     if(err){
    //         throw err;
    //     }else{

    //         resp.json({
    //             success:true,
    //             data:doc
    //         });
    //     }
    // });
});


//export
module.exports = router;