const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const NotificationSchema = mongoose.Schema({
    campaign:{
        type:String
    },
    name:{
        type:String
    },
    category:{
        type:String
    },
    language:{
        type:String
    },
    message:{
        type:String
    },
    payload:[
        {
            user:String,
            username:String,
            userphone:String,
            useremail:String,
            usergender:String,
            token:String,
            seen:String,
            ack:String,
            reported:String,
            reportmsg:String,
            reportedat:String
        }
    ],
    createdby:{
        type:String
    },
    created:{
        type:String
    }
});

//to get this function from outside, export it
const Notification = module.exports = mongoose.model('Notification',NotificationSchema);











