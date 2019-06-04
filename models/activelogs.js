const mongoose = require('mongoose');
const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

//user schema
const ActivelogsSchema = mongoose.Schema({
    apiname:{
        type:String
    },
    message:{
        type:String
    },
    preference:{
        type:String
    },
    type:{
        type:String
    },
    number:{
        type:String
    },
    masking:{
        type:String
    },
    name:{
        type:String
    },
    language:{
        type:String
    },
    createdat:{
        type:Date,
        default:() => moment.utc().add(5,'hours')
    }
});

//to get this function from outside, export it
const Activelogs = module.exports = mongoose.model('Activelogs',ActivelogsSchema);











