const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

//user schema
const TrackerSchema = mongoose.Schema({
    maskforiegn:{
        type: String,
        required:true
    },
    maskname:{
        type:String,
        required:true
    },
    feature:{
        type:String,
        required:true
    },
    problem:{
        type:String
    },
    remarks:{
        type:String
    },
    createdby:{
        type:String
    },
    created:{
        type:Date
    },
    status:{
        type:String
    }
});

//to get this function from outside, export it
const Tracker = module.exports = mongoose.model('Tracker',TrackerSchema);











