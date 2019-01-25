const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

//user schema
const DripSchema = mongoose.Schema({
    name:{
        type:String
    },
    language:{
        type:String
    },
    masking:{
        type:String
    },
    campaign:{
        type:String
    },
    path:{
        type:String
    },
    msg:{
        type:String
    },
    datefrom:{
        type:String
    },
    dateto:{
        type:String
    },
    frequency:{
        type:String
    },
    timespayload:[{
        status:String,
        time:String
    }],
    createdby:{
        type:String
    },
    created:{
        type:String
    },
    createdmoment:{
        type:Date,
        default:moment.utc().add(5,'hours')
    },
    account:{
        type:String
    },
    password:{
        type:String
    },
    status:{
        type:String
    },
    encrypted:{
        type:Boolean,
        default:false
    }
});

//to get this function from outside, export it
const Drip = module.exports = mongoose.model('Drip',DripSchema);











