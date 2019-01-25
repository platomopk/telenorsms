const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const TemplatemSchema = mongoose.Schema({
    name:{
        type:String
    },
    type:{
        type:String
    },
    description:{
        type: String
    },
    path:{
        type: String
    },
    createdby:{
        type:String
    },
    created:{
        type:String
    }
});

//to get this function from outside, export it
const Templatem = module.exports = mongoose.model('Templatem',TemplatemSchema);











