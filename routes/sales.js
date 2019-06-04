const express = require('express');
const router = express.Router();
const Mask = require('../models/mask');
var multer = require('multer');
var request = require("request");
var http = require('http');
var now = require("performance-now")
const User = require('../models/user');
const Quick = require('../models/quick');
const Credit = require('../models/credit');
const Digital = require('../models/digital');
const Drip = require('../models/drip');
const Bulk = require('../models/bulk');
const Dripbulk = require('../models/dripbulk');
const Campaignm = require('../models/campaignm');
const Templatem = require('../models/templatem');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
const async = require('async');
var soap = require('soap');
var path = require('path');
var await = require('asyncawait/await');
var csv = require('fast-csv');
const Moment = require('moment');
// var momentrrange =  require('moment-range');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
var fs = require("fs");
var CryptoJS = require("crypto-js");

const cron = require('node-cron');
var cloudinary = require('cloudinary');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
const Activelogs = require('../models/activelogs');


router.get('/getreport/:query', (req, res) => {
    try {
        var query = JSON.parse(req.params.query);
        User.find(
            {
                salesemail: query.email
            },
            {
                email: 1,
                fullname: 1,
                salesemail:1
            },
            (err, docx) => {
                if(docx.length==0){
                    return res.json({
                        success: false,
                        error: "Not found"
                    })
                }
                if (err) {
                    res.json({
                        success: false,
                        error: err
                    })
                } else {
                    var newArr = [];
                    var totalsmsbought = 0;
                    var totalsmscost = 0;

                    async.each(
                        docx,
                        function (item, callback) {

                            Credit.find(
                                {
                                    to:item.email,
                                    payment:true,
                                    created: {
                                        $lte: moment.utc(query.dateto,"YYYY-MM-DD").endOf('day').toDate(),
                                        $gte: moment.utc(query.datefrom,"YYYY-MM-DD").startOf('day').toDate()
                                    },
                                },
                                (err,creditdocx)=>{
                                    if(err){
                                        callback(err);
                                    }

                                    Quick.count(
                                        {
                                            createdby: item.email,
                                            created: {
                                                $lte: moment.utc(query.dateto,"YYYY-MM-DD").endOf('day').toDate(),
                                                $gte: moment.utc(query.datefrom,"YYYY-MM-DD").startOf('day').toDate()
                                            },
                                            sentid: { $ne: "0" }
                                        },
                                        (err, qcount) => {
                                            if (err) {
                                                callback(err);
                                            }
        
        
                                            // bulk
                                            Bulk.count(
                                                {
                                                    createdby: item.email,
                                                    created: {
                                                        $lte: moment.utc(query.dateto,"YYYY-MM-DD").endOf('day').toDate(),
                                                        $gte: moment.utc(query.datefrom,"YYYY-MM-DD").startOf('day').toDate()
                                                    },
                                                    sentid: { $ne: "0" }
                                                },
                                                (err, bcount) => {
                                                    if (err) {
                                                        callback(err);
                                                    }
        
                                                    // drip
                                                    Dripbulk.count(
                                                        {
                                                            createdby: item.email,
                                                            created: {
                                                                $lte: moment.utc(query.dateto,"YYYY-MM-DD").endOf('day').toDate(),
                                                                $gte: moment.utc(query.datefrom,"YYYY-MM-DD").startOf('day').toDate()
                                                            },
                                                            sentid: { $ne: "0" }
                                                        },
                                                        (err, dcount) => {
                                                            if (err) {
                                                                callback(err);
                                                            }

                                                            totalsmsbought = 0;
                                                            totalsmscost = 0;
                        
                                                            creditdocx.forEach(function(element) {
                                                                totalsmsbought += parseFloat(element.smscredit);
                                                                totalsmscost += parseFloat(element.cost);
                                                            }, this);
                        
                        
                                                            // console.log(creditdocx)
                                                            // console.log(totalsmsbought,totalsmscost);
                                                            
                                                            var baserate = parseFloat(totalsmscost/totalsmsbought).toFixed(3);
                                                            if(isNaN(baserate)){
                                                                baserate = 0;
                                                            }
                                                            newArr.push({_id:item._id,salesemail:item.salesemail,fullname:item.fullname,email:item.email,qcount:qcount,bcount:bcount,dcount:dcount,from:query.datefrom,to:query.dateto,total:parseInt(qcount+bcount+dcount),smsbought:totalsmsbought,smscost:totalsmscost,baserate:baserate,revenue:parseFloat(baserate*parseInt(qcount+bcount+dcount))});
                                                            // console.log(newArr);
                                                            callback();
                                                        }
                                                    );                                        
                                                }
                                            );
                                        }
                                    );

                                }
                            );




                        },
                        function (err) {
                            if (err) {
                                console.log(err);
                            }
                            res.json({
                                success: true,
                                data: newArr
                            })
                        });

                }
            }
        )
    } catch (error) {
        res.json({success:false,error:error})
    }

});


//export
module.exports = router;