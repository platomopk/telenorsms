const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const MaskSchema = mongoose.Schema({
    mask:{
        type: String,
        unique:true
    },
    description:{
        type:String
    },
    type:{
        type:String
    },
    createdby:{
        type:String
    },
    created:{
        type:Date
    },
    status:{
        type:String,
        default:'pending'
    }
});


//to get this function from outside, export it
const Mask = module.exports = mongoose.model('Mask',MaskSchema);


module.exports.getMaskById = function(id, callback){
    Mask.findById(id,callback);
}








