const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user schema
const QuickSchema = mongoose.Schema({
    name: {
        type: String
    },
    language: {
        type: String,
        default:'english'
    },
    masking: {
        type: String
    },
    mobileno: {
        type: String
    },
    msg: {
        type: String
    },
    msgchars: {
        type: String,
        default:'0'
    },
    noofmsgs: {
        type: String,
        default:'0'
    },
    preference: {
        type: String,
        default:'withmask'
    },
    createdby: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now()
    },
    mnp:{
        type:String,
        default:'0'
    },
    intended:{
        type:String,
        default:'0'
    },
    telco:{
        type:String,
        default:'0'
    },
    priority:{
        type:String,
        default:'0'
    },
    sentid: {
        type: String,
        default:'0'
    },
    sentlength: {
        type: String,
        default:'0'
    },
    encrypted: {
        type:Boolean,
        default:false
    },
    error:{
        type:String,
        default:'none'
    }
}, { timestamps: true });

//to get this function from outside, export it
const Quick = module.exports = mongoose.model('Quick', QuickSchema);












