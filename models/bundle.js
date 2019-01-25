const mongoose = require('mongoose');

//user schema
const BundleSchema = mongoose.Schema({
    expiry:{
        type: Date
    },
    encryption:{
        type: String,
        default:'disable'
    },
    featureset:[String],
    smstp:{
        type:Number
    },
    watp:{
        type:Number
    },
    cost:{
        type:Number
    },
    payment:{
        type:Boolean
    },
    status:{
        type:String
    },
    createdby:{
        type:String
    },
    created:{
        type:Date,
        default:Date.now()
    }
});

//to get this function from outside, export it
const Bundle = module.exports = mongoose.model('Bundle',BundleSchema);


module.exports.getBundleById = function(id, callback){
    Bundle.findById(id,callback);
}








