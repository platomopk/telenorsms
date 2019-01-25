const mongoose = require('mongoose');

//user schema
const CreditSchema = mongoose.Schema({
    smscredit:{
        type:Number,
        default:0
    },
    whatsappcredit:{
        type:Number,
        default:0
    },
    from:{
        type:String
    },
    to:{
        type:String
    },
    cost:{
        type:Number,
        default:0
    },
    payment:{
        type:Boolean,
        default:false
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
const Credit = module.exports = mongoose.model('Credit',CreditSchema);










