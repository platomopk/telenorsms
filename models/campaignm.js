const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const CampaignmSchema = mongoose.Schema({
    name:{
        type: String
    },
    type:{
        type:String
    },
    description:{
        type:String
    },
    path:{
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
const Campaignm = module.exports = mongoose.model('Campaignm',CampaignmSchema);











