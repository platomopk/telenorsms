const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const CampaignnSchema = mongoose.Schema({
    preference:{
        type: String
    },
    topic:{
        type:String
    },
    name:{
        type:String,
        unique:true
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
    createdby:{
        type:String
    },
    created:{
        type:String
    }
});

//to get this function from outside, export it
const Campaignn = module.exports = mongoose.model('Campaignn',CampaignnSchema);











