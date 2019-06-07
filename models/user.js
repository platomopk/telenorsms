const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

//user schema
const UserSchema = mongoose.Schema({
    enckey:{
        type:String,
        default:""
    },
    salesemail:{
        type:String,
        default:""
    },
    fullname:{
        type: String,
        default:""
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    rights:[String],
    isparent:{
        type:Boolean
    },
    isdelegate:{
        type:Boolean
    },
    parent:{
        type:String,
        default:""
    },
    parents:[String],
    type:{
        type:String,
        default:""
    },
    expirybundle:{
        type:Date,
        default:moment.utc().toDate()
    },
    encryption:{
        type:String,
        default:'disable'
    },
    smstp:{
        type:Number,
        default:0
    },
    watp:{
        type:Number,
        default:0
    },
    creditsms:{
        type:Number,
        default:0
    },
    creditwhatsapp:{
        type:Number,
        default:0
    },
    isactivated:{
        type:Boolean,
        default:false
    },
    issuspended:{
        type:Boolean,
        default:false
    },
    created:{
        type:Date
    },
    ufone:{
        type:String,
        default:""
    },
    telenor:{
        type:String,
        default:""
    },
    zong:{
        type:String,
        default:""
    },
    jazz:{
        type:String,
        default:""
    },
    warid:{
        type:String,
        default:""
    }
});

//to get this function from outside, export it
const User = module.exports = mongoose.model('User',UserSchema);


module.exports.getUserById = function(id, callback){
    User.findById(id,callback);
}

module.exports.getUserByEmail = function(email, callback){
    const query = {email: email};
    User.findOne(query,callback);
}

module.exports.addUser = function(newUser, callback){
    
    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err){
                throw err;
                //res.json({success:false,msg:err});
            }else{
                //res.json({success:false,msg:err});
                newUser.password = hash;
                newUser.save(callback);
            }
            
        });
    });
    
}



module.exports.comparePassword = function(password,hash,callback){
    bcrypt.compare(password,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    });
}







