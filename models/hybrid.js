const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const HybridSchema = mongoose.Schema({
    name:{
        type:String
    },
    masking:{
        type:String
    },
    language:{
        type:String
    },
    msg:{
        type:String
    },
    locking:{
        type:String
    },
    payload:[
        {
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
    },
    numbers:[String],
    tokens:[String]
});

//to get this function from outside, export it
const Hybrid = module.exports = mongoose.model('Hybrid',HybridSchema);











