const mongoose = require('mongoose');

//user schema
const DigitalSchema = mongoose.Schema({
    name: {
        type: String
    },
    mobileno: {
        type: String
    },
    msg: {
        type: String
    },
    createdby: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String
    }
}, { timestamps: true });

//to get this function from outside, export it
const Digital = module.exports = mongoose.model('Digital', DigitalSchema);











