const express = require('express');
const router = express.Router();
const Mask = require('../models/mask');
var multer = require('multer');
var request = require("request");
var http = require('http');
var now = require("performance-now")
const User = require('../models/user');
const Quick = require('../models/quick');
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

var telenor_api_token = '';

var isServerOpen = false;

// ---------------------------
var DIR = './uploads/';
var upload = multer({
    dest: DIR
}).single('photo');

// -----------------------------------------------------
// cron job for drip messages
cron.schedule("* * * * *", function () {

    // console.log(telenor_api_token , ' TelenorAPI')


    // console.log("Running every minute", moment().format("hh:mm:ss a"));
    var query = {
        'timespayload.status': '',
        status: 'scheduled'
    }
    var objarr = [];
    Drip.find(query, (err, doc) => {
        if (err) {
            console.log(err);
            // res.send(err);
        } else {

            var masterarr = doc;
            // console.log(masterarr);

            masterarr.forEach(function (element) {
                // check if the date of the drip is between the date range
                var fromdateserver = moment(element.datefrom).format('YYYY-MM-DD');
                var todateserver = moment(element.dateto).format('YYYY-MM-DD');
                var currentdate = moment().format('YYYY-MM-DD');

                // console.log(fromdateserver,todateserver,currentdate)

                var test = moment(currentdate).isBetween(fromdateserver, todateserver, null, []);

                // console.log(test);

                if (test) {
                    // console.log(element.name + ' is okay to be processed');

                    element.timespayload.forEach(function (payload) {
                        if (payload.status == "") {

                            var st = moment().format('hh:mm a');
                            var startTime = moment(st, 'hh:mm a');
                            var endTime = moment(payload.time, 'hh:mm a');
                            var minutes = endTime.diff(startTime, 'minutes');

                            var numberscsv = [];
                            // console.log(payload.time + ' difference is ' + minutes + ' minutes');

                            if (minutes == 0) {

                                // console.log('attempting bulk for ' + payload.time);
                                // it is time to send the bulk
                                filepath = path.join(__dirname, '..', './uploads') + '/' + element.path;
                                csv.fromStream(request(element.path), { delimiter: ';', objectMode: true, headers: false })
                                    .on('data', function (data) {
                                        numberscsv.push(data[0]);
                                        //console.log(data);  
                                    })
                                    .on('end', function () {
                                        numberscsv = Array.from(new Set(numberscsv));


                                        User.findOne(
                                            {
                                                email: element.createdby,
                                                expirybundle: {
                                                    $gte: moment.utc().add(5, 'hours').toDate()
                                                }
                                            },
                                            (err, user) => {
                                                if (err) {
                                                    console.log(err);
                                                }
                                                if (!user) {
                                                    console.log('user not found for drip/config expired ', element._id);
                                                } else {

                                                    if (user.smstp > 0) {
                                                        if (numberscsv.length <= user.creditsms) {
                                                            // can send sms


                                                            Mask.findOne(
                                                                {
                                                                    createdby: user.email,
                                                                    mask: element.masking,
                                                                    status: 'activated'
                                                                },
                                                                (err, mask) => {
                                                                    if (err) {
                                                                        console.log(err, element._id);
                                                                    }
                                                                    if (!mask) {
                                                                        console.log('invalid mask', element._id);
                                                                    } else {
                                                                        // console.time("insertbulk")
                                                                        var a = now();

                                                                        var apiarr = [];
                                                                        var obj = {};

                                                                        var bulkb = Dripbulk.collection.initializeOrderedBulkOp();
                                                                        for (var i = 0; i < numberscsv.length; i++) {
                                                                            var _intended = ''; var _message = "";
                                                                            //jsonArr.push({ id: i, name: name });

                                                                            if (numberscsv[i].substring(0, 4) === '9230') {
                                                                                _intended = 'jazz'
                                                                            } else if (numberscsv[i].substring(0, 4) === '9231') {
                                                                                _intended = 'zong'
                                                                            } else if (numberscsv[i].substring(0, 4) === '9232') {
                                                                                _intended = 'warid'
                                                                            } else if (numberscsv[i].substring(0, 4) === '9233') {
                                                                                _intended = 'ufone'
                                                                            } else if (numberscsv[i].substring(0, 4) === '9234') {
                                                                                _intended = 'telenor'
                                                                            } else if (numberscsv[i].substring(0, 4) === '9235') {
                                                                                _intended = 'sco'
                                                                            } else if (numberscsv[i].substring(0, 4) === '9236') {
                                                                                _intended = 'pri'
                                                                            }

                                                                            if(user.encryption == 'enable'){
                                                                                if(user.type == 'omo'){
                                                                                    _message = CryptoJS.AES.encrypt(element.msg, user.enckey.trim()).toString();
                                                                                }else{
                                                                                    _message = CryptoJS.AES.encrypt(element.msg, element.createdby).toString();
                                                                                }
                                                                            }else{
                                                                                _message = element.msg;
                                                                            }


                                                                            


                                                                            if (mask.type === 'whitelisted') {
                                                                                obj = {
                                                                                    name: element.name,
                                                                                    language: element.language,
                                                                                    campaign: element.campaign,
                                                                                    path: element.path,
                                                                                    masking: element.masking,
                                                                                    msg: _message,
                                                                                    createdby: element.createdby,
                                                                                    created: moment.utc().add(5, 'hours').toDate(),
                                                                                    mnp: "0",
                                                                                    time: payload.time,
                                                                                    intended: _intended,
                                                                                    telco: _intended,
                                                                                    priority: "0",
                                                                                    mobileno: numberscsv[i],
                                                                                    sentid: "0",
                                                                                    sentlength: "0",
                                                                                    encrypted: user.encryption == 'enable' ? true : false
                                                                                };
                                                                                apiarr.push(obj);
                                                                            } else if (mask.type === _intended) {
                                                                                obj = {
                                                                                    name: element.name,
                                                                                    language: element.language,
                                                                                    campaign: element.campaign,
                                                                                    path: element.path,
                                                                                    masking: element.masking,
                                                                                    msg: _message,
                                                                                    createdby: element.createdby,
                                                                                    created: moment.utc().add(5, 'hours').toDate(),
                                                                                    mnp: "0",
                                                                                    time: payload.time,
                                                                                    intended: _intended,
                                                                                    telco: _intended,
                                                                                    priority: "0",
                                                                                    mobileno: numberscsv[i],
                                                                                    sentid: "0",
                                                                                    sentlength: "0",
                                                                                    encrypted: user.encryption == 'enable' ? true : false
                                                                                };
                                                                                apiarr.push(obj);
                                                                            } else {
                                                                                obj = {
                                                                                    name: element.name,
                                                                                    language: element.language,
                                                                                    campaign: element.campaign,
                                                                                    path: element.path,
                                                                                    masking: element.masking,
                                                                                    msg: _message,
                                                                                    createdby: element.createdby,
                                                                                    created: moment.utc().add(5, 'hours').toDate(),
                                                                                    mnp: "0",
                                                                                    time: payload.time,
                                                                                    intended: _intended,
                                                                                    telco: _intended,
                                                                                    priority: "0",
                                                                                    mobileno: numberscsv[i],
                                                                                    sentid: "0",
                                                                                    sentlength: "0",
                                                                                    encrypted: user.encryption == 'enable' ? true : false,
                                                                                    error: 'wrong masking used'
                                                                                };
                                                                            }

                                                                            bulkb.insert(obj);
                                                                            if (i % 500 == 0) {
                                                                                // console.log(i + 500 / 500, "#bulk inserted with ", i + 1, " values");
                                                                                bulkb.execute();
                                                                                bulkb = Dripbulk.collection.initializeOrderedBulkOp();
                                                                            }
                                                                            //jsonArr.push(obj);
                                                                        }
                                                                        var lim = bulkb.length;
                                                                        // console.log("inserting remaining values ", lim, " values");
                                                                        bulkb.execute().catch(reason => {
                                                                            // console.log("empty ops in bulksmsdynamic exec");
                                                                        });
                                                                        // console.log("inserted ", lim, " values");
                                                                        // console.timeEnd("insertbulk");
                                                                        var b = now();
                                                                        // console.log("insertend");

                                                                        for (let index = 0; index < apiarr.length; index++) {

                                                                            var obj = {
                                                                                name: element.name,
                                                                                masking: element.masking,
                                                                                number: apiarr[index].mobileno,
                                                                                msg:apiarr[index].msg,
                                                                                action:"drip",
                                                                                // msg: user.encryption == 'enable' ? CryptoJS.AES.encrypt(element.msg, element.createdby.trim()).toString() : element.msg,
                                                                                language: apiarr[index].language
                                                                            }
                                                                            TelenorQuickSmsApiHandler.push(obj);


                                                                            // if (apiarr[index].telco == 'telenor') {
                                                                            //     var obj = {
                                                                            //         name: element.name,
                                                                            //         masking: element.masking,
                                                                            //         number: apiarr[index].mobileno,
                                                                            //         msg:apiarr[index].msg,
                                                                            //         // msg: user.encryption == 'enable' ? CryptoJS.AES.encrypt(element.msg, element.createdby.trim()).toString() : element.msg,
                                                                            //         language: apiarr[index].language
                                                                            //     }
                                                                            //     // TelenorQuickSmsApiHandler.push(obj);
                                                                            // } else if (apiarr[index].telco == 'zong') {
                                                                            //     var obj = {
                                                                            //         name: element.name,
                                                                            //         masking: element.masking,
                                                                            //         number: apiarr[index].mobileno,
                                                                            //         msg:apiarr[index].msg,
                                                                            //         // msg: user.encryption == 'enable' ? CryptoJS.AES.encrypt(element.msg, element.createdby.trim()).toString() : element.msg,
                                                                            //         language: apiarr[index].language
                                                                            //     }
                                                                            //     ZongQuickSmsApiHandler.push(obj);
                                                                            // }


                                                                        }

                                                                        user.creditsms = user.creditsms - apiarr.length;
                                                                        user.save(function (err) {
                                                                            if (err) {
                                                                                console.log('user not found for drip/config expired ', element._id);
                                                                            }
                                                                            payload.status = 'completed';
                                                                            element.save(function (err) {
                                                                                if (err) {
                                                                                    console.log(err, element._id);
                                                                                }
                                                                                console.log('Drip completed for ', element._id);
                                                                            })

                                                                        })
                                                                    }
                                                                }
                                                            )

                                                        } else {
                                                            console.log('not enough balance for drip ', element._id);
                                                        }
                                                    } else {
                                                        console.log('not enough throuput for drip ', element._id);
                                                    }


                                                }
                                            }
                                        )


                                    });
                            }
                        }
                    });
                } else {
                    //  console.log(element.name+" is expired.");
                }
            }, this);
            //res.send(doc);
        }
    });

    // console.log("Running every minute", moment().format("hh:mm:ss a"));
    // console.log('Telenor Queue Size', TelenorQuickSmsApiHandler.workersList());


});
// --------------------------------------------------------------------------------



// --------------------------------------


// --------------------------------------------------------

router.post('/template/register', (req, res) => {

    var name = req.body.name;
    var description = req.body.description;
    var type = req.body.type;
    var createdby = req.body.createdby;
    var created = new Date().toLocaleDateString("en-US");

    let newTemp = new Templatem({
        name: name,
        description: description,
        type: type,
        createdby: createdby,
        created: created
    });

    newTemp.save((err, template) => {
        if (err) {
            res.json({
                success: false
            });
        } else {
            res.json({
                success: true
            });
        }
    })

});

router.get('/template/:email', (req, resp) => {
    let query = {
        createdby: req.params.email
    };
    Templatem.find(query, (err, doc) => {
        if (err) {
            throw err;
        } else {
            //console.log(doc);
            resp.json({
                success: true,
                data: doc
            });
        }
    });
});

router.get('/template/static/:email', (req, resp) => {
    let query = {
        $and: [{
            createdby: req.params.email
        },
        {
            type: 'static'
        }
        ]

    };
    Templatem.find(query, (err, doc) => {
        if (err) {
            throw err;
        } else {
            //console.log(doc);
            resp.json({
                success: true,
                data: doc
            });
        }
    });
});

router.get('/template/dynamic/:email', (req, resp) => {
    let query = {
        $and: [{
            createdby: req.params.email
        },
        {
            type: 'dynamic'
        }
        ]

    };
    Templatem.find(query, (err, doc) => {
        if (err) {
            throw err;
        } else {
            //console.log(doc);
            resp.json({
                success: true,
                data: doc
            });
        }
    });
});

router.delete('/template/:id', (req, resp) => {
    let query = {
        _id: req.params.id
    };
    Templatem.remove(query, (err) => {
        if (err) {
            resp.json({
                success: false,
                msg: 'The template was not deleted'
            });
        } else {
            resp.json({
                success: true,
                msg: 'The template was deleted'
            });
        }
    });
});
// --------------------------------------------------------


// ------------------------------------------------------
router.post('/campaigns/upload', function (req, res, next) {

    cloudinary.config({
        cloud_name: 'devlabs-pakistan',
        api_key: '313335615588774',
        api_secret: 'cqU-1QHEw8JyrfRiyuEDG0F7u48'
    });


    var path = '';
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return res.status(422).send("an Error occured")
        }
        // No error occured.

        var str = req.files.photo.name;
        var arr = str.split('.');

        var dt = Date.now();

        var path = '/uploads/' + dt + '.' + arr[1];
        var pathfilename = dt + '.' + arr[1];

        req.files.photo.mv('.' + path, function (err) {
            if (err) {
                console.log(err);
                res.json({
                    success: false,
                    msg: err
                })
            } else {

                cloudinary.v2.uploader.upload(
                    "./uploads/" + pathfilename,
                    {
                        resource_type: "raw"
                    },
                    (err, results) => {
                        if (err) {
                            console.log(err);
                            res.json({
                                success: false,
                                error: err
                            });
                        } else {
                            console.log(results);
                            res.json({
                                success: true,
                                path: results.secure_url
                            });
                        }
                    }
                );
            }
        });
        //    path = req.file.path;
        //    return res.send("Upload Completed for "+path); 
    });
})

router.post('/campaigns/register', (req, res) => {

    let campaign = new Campaignm({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        path: req.body.path,
        createdby: req.body.createdby,
        created: new Date().toLocaleDateString("en-US")
    });

    campaign.save((err, campaign) => {
        if (err) {
            res.json({
                success: false
            });
        } else {
            res.json({
                success: true
            });
        }
    })

});

router.get('/campaigns/:email', (req, resp) => {
    let query = {
        createdby: req.params.email
    };
    Campaignm.find(query, (err, doc) => {
        if (err) {
            throw err;
        } else {
            //console.log(doc);
            resp.json({
                success: true,
                data: doc
            });
        }
    });
});

router.get('/campaigns/static/:email', (req, resp) => {
    let query = {
        $and: [{
            createdby: req.params.email
        },
        {
            type: 'static'
        }
        ]

    };
    Campaignm.find(query, (err, doc) => {
        if (err) {
            throw err;
        } else {
            //console.log(doc);
            resp.json({
                success: true,
                data: doc
            });
        }
    });
});

router.get('/campaigns/dynamic/:email', (req, resp) => {
    let query = {
        $and: [{
            createdby: req.params.email
        },
        {
            type: 'dynamic'
        }
        ]

    };
    Campaignm.find(query, (err, doc) => {
        if (err) {
            throw err;
        } else {
            //console.log(doc);
            resp.json({
                success: true,
                data: doc
            });
        }
    });
});

router.delete('/campaigns/:id', (req, resp) => {
    let query = {
        _id: req.params.id
    };
    Campaignm.remove(query, (err) => {
        if (err) {
            resp.json({
                success: false,
                msg: 'The campaign was not deleted'
            });
        } else {
            resp.json({
                success: true,
                msg: 'The campaign was deleted'
            });
        }
    });
});

router.get('/campaigns/download/:path', (req, res, next) => {
    filepath = path.join(__dirname, '../uploads') + '/' + req.params.path;
    console.log(path.resolve(filepath));
    res.download(path.resolve(filepath));
    //res.sendFile(path.resolve(filepath));
});


// zongquicksmsAPI queue for QuickSms
var ZongQuickSMSApiHandlerQueueSize = 2;
var ZongQuickSmsApiHandler = async.queue(function (request, done) {

    if(request.resurrect == true){
        setTimeout(function () {
            var url = 'https://cbs.zong.com.pk/reachcwsv2/corporatesms.svc?wsdl';
            var quicksmsargs = {
                'obj_QuickSMS': {
                    'loginId': '923170000424',
                    'loginPassword': '123',
                    'Destination': request.number,
                    'Mask': request.masking,
                    'Message': request.msg,
                    'UniCode': '0',
                    'ShortCodePrefered': 'n'
                }
            }
            soap.createClient(url, function (err, client) {
                if (err) {
                    console.log(err, ' QUICKSMS CANT CONNECT TO ZONGAPICLIENT');
                    done();
                } else {
                    client.QuickSMS(quicksmsargs, function (err, result) {
                        console.log("in client", request.number)
                        if (err) {
                            console.log(err);
                            done();
                            //callback(err);
                        } else {
                            var str = result.QuickSMSResult;
                            // console.log(str);

                            if (str.indexOf("Successfully") > 0) {
                                str = str.replace(/\s+/g, '');
                                var colon = str.indexOf(':') + 1;
                                var dot = str.indexOf(".");
                                var msgid = str.substring(colon, dot);

                                var msglenstr = str.indexOf('MessageLength:') + 14;
                                var msglenstrdot = str.length - 1;
                                var msglen = str.substring(msglenstr, msglenstrdot);

                                Quick.update({
                                    name: request.name,
                                    mobileno: request.number
                                }, {
                                        $set: {
                                            "sentid": msgid,
                                            "sentlength": msglen
                                        }
                                    }, {
                                        multi: true
                                    },
                                    (err, raw) => {
                                        if (err) {
                                            console.log(err);
                                            done();
                                        } else {
                                            Activelogs.findOneAndRemove(
                                                {
                                                    _id: request.logid
                                                },
                                                (err, res) => {
                                                    if (err) {
                                                        console.log(err);
                                                        done();
                                                    } else {
                                                        console.log("Zong API ", request.number, "->", str);
                                                        console.log("removed ", request.logid);
                                                        done();
                                                    }
                                                }
                                            );
                                        }
                                    }
                                )
                            } else {
                                Quick.update({
                                    name: request.name,
                                    mobileno: request.number
                                }, {
                                        $set: {
                                            "error": str
                                        }
                                    }, {
                                        multi: true
                                    },
                                    (err, raw) => {
                                        if (err) {
                                            console.log(err);
                                            done();
                                        } else {
                                            Activelogs.findOneAndRemove(
                                                {
                                                    _id: log._id
                                                },
                                                (err, res) => {
                                                    if (err) {
                                                        console.log(err);
                                                        done();
                                                    } else {
                                                        console.log("Zong API ", request.number, "->", str);
                                                        console.log("removed ", log._id);
                                                        done();
                                                    }
                                                }
                                            );
                                        }
                                    }
                                )
                            }
                        }
                    });
                }

            });
        }, 0);

    }else{
        var log = new Activelogs({
            apiname: "zong",
            message: request.msg,
            number: request.number,
            name: request.name,
            masking: request.masking,
            language: request.language,
            type: 'quick'
        });
        log.save((err, log) => {
            if (err) {
                console.log(err);
                done();
            } else {
                console.log("Inserted", log._id);
                setTimeout(function () {
                    var url = 'https://cbs.zong.com.pk/reachcwsv2/corporatesms.svc?wsdl';
                    var quicksmsargs = {
                        'obj_QuickSMS': {
                            'loginId': '923170000424',
                            'loginPassword': '123',
                            'Destination': request.number,
                            'Mask': request.masking,
                            'Message': request.msg,
                            'UniCode': '0',
                            'ShortCodePrefered': 'n'
                        }
                    }
                    soap.createClient(url, function (err, client) {
                        if (err) {
                            console.log(err, ' QUICKSMS CANT CONNECT TO ZONGAPICLIENT');
                            done();
                        } else {
                            client.QuickSMS(quicksmsargs, function (err, result) {
                                console.log("in client", request.number)
                                if (err) {
                                    console.log(err);
                                    done();
                                    //callback(err);
                                } else {
                                    var str = result.QuickSMSResult;
                                    // console.log(str);
    
                                    if (str.indexOf("Successfully") > 0) {
                                        str = str.replace(/\s+/g, '');
                                        var colon = str.indexOf(':') + 1;
                                        var dot = str.indexOf(".");
                                        var msgid = str.substring(colon, dot);
    
                                        var msglenstr = str.indexOf('MessageLength:') + 14;
                                        var msglenstrdot = str.length - 1;
                                        var msglen = str.substring(msglenstr, msglenstrdot);
    
                                        Quick.update({
                                            name: request.name,
                                            mobileno: request.number
                                        }, {
                                                $set: {
                                                    "sentid": msgid,
                                                    "sentlength": msglen
                                                }
                                            }, {
                                                multi: true
                                            },
                                            (err, raw) => {
                                                if (err) {
                                                    console.log(err);
                                                    done();
                                                } else {
                                                    Activelogs.findOneAndRemove(
                                                        {
                                                            _id: log._id
                                                        },
                                                        (err, res) => {
                                                            if (err) {
                                                                console.log(err);
                                                                done();
                                                            } else {
                                                                console.log("Zong API ", request.number, "->", str);
                                                                console.log("removed ", log._id);
                                                                done();
                                                            }
                                                        }
                                                    );
                                                }
                                            }
                                        )
                                    } else {
                                        Quick.update({
                                            name: request.name,
                                            mobileno: request.number
                                        }, {
                                                $set: {
                                                    "error": str
                                                }
                                            }, {
                                                multi: true
                                            },
                                            (err, raw) => {
                                                if (err) {
                                                    console.log(err);
                                                    done();
                                                } else {
                                                    Activelogs.findOneAndRemove(
                                                        {
                                                            _id: log._id
                                                        },
                                                        (err, res) => {
                                                            if (err) {
                                                                console.log(err);
                                                                done();
                                                            } else {
                                                                console.log("Zong API ", request.number, "->", str);
                                                                console.log("removed ", log._id);
                                                                done();
                                                            }
                                                        }
                                                    );
                                                }
                                            }
                                        )
                                    }
                                }
                            });
                        }
    
                    });
                }, 0);
            }
        });
    }






}, ZongQuickSMSApiHandlerQueueSize);

ZongQuickSmsApiHandler.drain = function () {
    console.log("All the ZONGQuickSMSApiRequests have been completed!");
}


// --------------------------------------------------------------------------------------
var TelenorQuickSMSApiHandlerQueueSize = 2;
var TelenorQuickSmsApiHandler = async.queue(function (request_, done) {
    // console.log('Picked ', request);
    // setTimeout(() => {
    //     console.log('Processing ',request);
    //     done();    
    // }, 1500);

    if(request_.resurrect == true){

        request_.msg = encodeURIComponent(request_.msg);
        request_.msg = request_.msg.replace("%20", "+");
        var telenorAPIUrl = "";
        setTimeout(() => {
            // request for api token
            request("https://telenorcsms.com.pk:27677/corporate_sms2/api/auth.jsp?msisdn=923453910292&password=qaz1wertyuiop123", function (err, resp, body) {
                if (err) {
                    console.log(err);
                    done();
                } else {
                    parser.parseString(body, function (err, ob) {
                        if (ob.corpsms.response[0] == 'OK') {
                            // set the telenor api token
                            telenor_api_token = ob.corpsms.data[0];

                            telenorAPIUrl = "https://telenorcsms.com.pk:27677/corporate_sms2/api/sendsms.jsp?session_id=" + telenor_api_token + "&to=" + request_.number + "&text=" + request_.msg;
                            if (request_.language != "english") {
                                telenorAPIUrl = telenorAPIUrl + "&unicode=true"
                            }

                            if (request_.masking != "default") {
                                telenorAPIUrl = telenorAPIUrl + "&mask=" + request_.masking;
                            }

                            // request the telenor msging api
                            request(telenorAPIUrl, function (err, resp, body) {
                                if (err) {
                                    console.log(err);
                                    done();
                                } else {
                                    parser.parseString(body, function (err, qmsg) {
                                        if (qmsg.corpsms.response[0] == 'OK') {
                                            // update the respective message in db
                                            Quick.update({
                                                name: request_.name,
                                                mobileno: request_.number
                                            }, {
                                                    $set: {
                                                        "sentid": qmsg.corpsms.data[0],
                                                        "sentlength": request_.msg.length
                                                    }
                                                }, {
                                                    multi: true
                                                },
                                                (err, raw) => {
                                                    if (err) {
                                                        console.log(err, '->', telenorAPIUrl);
                                                        done();
                                                    } else {
                                                        Activelogs.findOneAndRemove(
                                                            {
                                                                _id: request_.logid
                                                            },
                                                            (err, res) => {
                                                                if (err) {
                                                                    console.log(err);
                                                                    done();
                                                                } else {
                                                                    console.log("Telenor API ", request_.number, "->", qmsg.corpsms.data[0]);
                                                                    console.log("removed ", request_.logid);
                                                                    done();
                                                                }
                                                            }
                                                        );
                                                    }
                                                }
                                            )
                                        } else {

                                            Quick.update({
                                                name: request_.name,
                                                mobileno: request_.number
                                            }, {
                                                    $set: {
                                                        "error": qmsg.corpsms.data[0]
                                                    }
                                                }, {
                                                    multi: true
                                                },
                                                (err, raw) => {
                                                    if (err) {
                                                        console.log(err, '->', telenorAPIUrl);
                                                        done();
                                                    } else {
                                                        Activelogs.findOneAndRemove(
                                                            {
                                                                _id: log._id
                                                            },
                                                            (err, res) => {
                                                                if (err) {
                                                                    console.log(err);
                                                                    done();
                                                                } else {
                                                                    console.log("Telenor API ", request_.number, "->", qmsg.corpsms.data[0]);
                                                                    console.log("removed ", log._id);
                                                                    done();
                                                                }
                                                            }
                                                        );
                                                    }
                                                }
                                            );
                                        }
                                    })
                                }
                            });

                        } else {

                            console.log(ob.corpsms.data[0], ' in telenorAPI ', new Date());
                            done();
                        }
                    })

                }

            });

        }, 0);



    }else{
        var log = new Activelogs({
            apiname: "telenor",
            message: request_.msg,
            number: request_.number,
            name: request_.name,
            masking: request_.masking,
            language: request_.language,
            action:request_.action,
            type: 'quick'
        });
    
        log.save((err, log) => {
            if (err) {
                console.log(err);
                done();
            } else {
                console.log("Inserted", log._id);
                request_.msg = encodeURIComponent(request_.msg);
                request_.msg = request_.msg.replace("%20", "+");
                var telenorAPIUrl = "";
                setTimeout(() => {
                    // request for api token
                    request("https://telenorcsms.com.pk:27677/corporate_sms2/api/auth.jsp?msisdn=923453910292&password=qaz1wertyuiop123", function (err, resp, body) {
                        if (err) {
                            console.log(err);
                            done();
                        } else {
                            parser.parseString(body, function (err, ob) {
                                if (ob.corpsms.response[0] == 'OK') {
                                    // set the telenor api token
                                    telenor_api_token = ob.corpsms.data[0];
    
                                    telenorAPIUrl = "https://telenorcsms.com.pk:27677/corporate_sms2/api/sendsms.jsp?session_id=" + telenor_api_token + "&to=" + request_.number + "&text=" + request_.msg;
                                    if (request_.language != "english") {
                                        telenorAPIUrl = telenorAPIUrl + "&unicode=true"
                                    }
    
                                    if (request_.masking != "default") {
                                        telenorAPIUrl = telenorAPIUrl + "&mask=" + request_.masking;
                                    }
    
                                    // request the telenor msging api
                                    request(telenorAPIUrl, function (err, resp, body) {
                                        if (err) {
                                            console.log(err);
                                            done();
                                        } else {
                                            parser.parseString(body, function (err, qmsg) {
                                                if (qmsg.corpsms.response[0] == 'OK') {
                                                    // update the respective message in db


                                                    if(request_.action == "drip"){
                                                        Dripbulk.update({
                                                            name: request_.name,
                                                            mobileno: request_.number
                                                        }, {
                                                                $set: {
                                                                    "sentid": qmsg.corpsms.data[0],
                                                                    "sentlength": request_.msg.length
                                                                }
                                                            }, {
                                                                multi: true
                                                            },
                                                            (err, raw) => {
                                                                if (err) {
                                                                    console.log(err, '->', telenorAPIUrl);
                                                                    done();
                                                                } else {
                                                                    Activelogs.findOneAndRemove(
                                                                        {
                                                                            _id: log._id
                                                                        },
                                                                        (err, res) => {
                                                                            if (err) {
                                                                                console.log(err);
                                                                                done();
                                                                            } else {
                                                                                console.log("Telenor API ", request_.number, "->", qmsg.corpsms.data[0]);
                                                                                console.log("removed ", log._id);
                                                                                done();
                                                                            }
                                                                        }
                                                                    );
                                                                }
                                                            }
                                                        )
                                                    }else{
                                                        Quick.update({
                                                            name: request_.name,
                                                            mobileno: request_.number
                                                        }, {
                                                                $set: {
                                                                    "sentid": qmsg.corpsms.data[0],
                                                                    "sentlength": request_.msg.length
                                                                }
                                                            }, {
                                                                multi: true
                                                            },
                                                            (err, raw) => {
                                                                if (err) {
                                                                    console.log(err, '->', telenorAPIUrl);
                                                                    done();
                                                                } else {
                                                                    Activelogs.findOneAndRemove(
                                                                        {
                                                                            _id: log._id
                                                                        },
                                                                        (err, res) => {
                                                                            if (err) {
                                                                                console.log(err);
                                                                                done();
                                                                            } else {
                                                                                console.log("Telenor API ", request_.number, "->", qmsg.corpsms.data[0]);
                                                                                console.log("removed ", log._id);
                                                                                done();
                                                                            }
                                                                        }
                                                                    );
                                                                }
                                                            }
                                                        )
                                                    }



                                                    












                                                } else {

                                                    if(request_.action == "drip"){
                                                        Dripbulk.update({
                                                            name: request_.name,
                                                            mobileno: request_.number
                                                        }, {
                                                                $set: {
                                                                    "error": qmsg.corpsms.data[0]
                                                                }
                                                            }, {
                                                                multi: true
                                                            },
                                                            (err, raw) => {
                                                                if (err) {
                                                                    console.log(err, '->', telenorAPIUrl);
                                                                    done();
                                                                } else {
                                                                    Activelogs.findOneAndRemove(
                                                                        {
                                                                            _id: log._id
                                                                        },
                                                                        (err, res) => {
                                                                            if (err) {
                                                                                console.log(err);
                                                                                done();
                                                                            } else {
                                                                                console.log("Telenor API ", request_.number, "->", qmsg.corpsms.data[0]);
                                                                                console.log("removed ", log._id);
                                                                                done();
                                                                            }
                                                                        }
                                                                    );
                                                                }
                                                            }
                                                        );
                                                    }else{
                                                        Quick.update({
                                                            name: request_.name,
                                                            mobileno: request_.number
                                                        }, {
                                                                $set: {
                                                                    "error": qmsg.corpsms.data[0]
                                                                }
                                                            }, {
                                                                multi: true
                                                            },
                                                            (err, raw) => {
                                                                if (err) {
                                                                    console.log(err, '->', telenorAPIUrl);
                                                                    done();
                                                                } else {
                                                                    Activelogs.findOneAndRemove(
                                                                        {
                                                                            _id: log._id
                                                                        },
                                                                        (err, res) => {
                                                                            if (err) {
                                                                                console.log(err);
                                                                                done();
                                                                            } else {
                                                                                console.log("Telenor API ", request_.number, "->", qmsg.corpsms.data[0]);
                                                                                console.log("removed ", log._id);
                                                                                done();
                                                                            }
                                                                        }
                                                                    );
                                                                }
                                                            }
                                                        );
                                                    }
    
                                                    



                                                }
                                            })
                                        }
                                    });
    
                                } else {
    
                                    console.log(ob.corpsms.data[0], ' in telenorAPI ', new Date());
                                    done();
                                }
                            })
    
                        }
    
                    });
    
                }, 0);
            }
        });
    
    }





}, TelenorQuickSMSApiHandlerQueueSize);

TelenorQuickSmsApiHandler.drain = function () {
    console.log("All the TelenorQuickSMSApiRequests have been completed!");
}



// ---------------------------------------------------------------------------------------

// zong quicksmsAPI for dynamic bulks
var ZongQuickSMSApiHandlerForBulkQueueSize = 2;
var ZongQuickSmsApiHandlerForBulk = async.queue(function (request, done) {
    // setTimeout(function () {
    //     console.log('picked', request_);
    //     setTimeout(() => {
    //         console.log('done', request_);
    //         done();
    //     }, 1500);
    // }, Math.random());

    if(request.resurrect == true){
        setTimeout(function () {
            var url = 'https://cbs.zong.com.pk/reachcwsv2/corporatesms.svc?wsdl';
            var quicksmsargs = {
                'obj_QuickSMS': {
                    'loginId': '923170000424',
                    'loginPassword': '123',
                    'Destination': request.mobileno,
                    'Mask': request.masking,
                    'Message': request.msg,
                    'UniCode': '0',
                    'ShortCodePrefered': 'n'
                }
            }
            soap.createClient(url, function (err, client) {
                if (err) {
                    console.log(err, ' QUICKSMSFORBULK CANT CONNECT TO ZONGAPICLIENT');
                    done();
                } else {
                    client.QuickSMS(quicksmsargs, function (err, result) {
                        console.log("in client", request.mobileno)
                        if (err) {
                            console.log(err);
                            done();
                            //callback(err);
                        } else {
                            var str = result.QuickSMSResult;
                            // console.log(str);

                            if (str.indexOf("Successfully") > 0) {
                                str = str.replace(/\s+/g, '');
                                var colon = str.indexOf(':') + 1;
                                var dot = str.indexOf(".");
                                var msgid = str.substring(colon, dot);

                                var msglenstr = str.indexOf('MessageLength:') + 14;
                                var msglenstrdot = str.length - 1;
                                var msglen = str.substring(msglenstr, msglenstrdot);

                                Bulk.update({
                                    name: request.name,
                                    mobileno: request.mobileno,
                                    msg: request.msg
                                }, {
                                        $set: {
                                            "sentid": msgid,
                                            "sentlength": msglen
                                        }
                                    }, {
                                        multi: true
                                    },
                                    (err, raw) => {
                                        if (err) {
                                            console.log(err);
                                            done();
                                        } else {
                                            Activelogs.findOneAndRemove(
                                                {
                                                    _id: request.logid
                                                },
                                                (err, res) => {
                                                    if (err) {
                                                        console.log(err);
                                                        done();
                                                    } else {
                                                        console.log("Zong API ", request.mobileno, "->", str);
                                                        console.log("removed ", request.logid);
                                                        done();
                                                    }
                                                }
                                            );
                                        }
                                    }
                                )
                            } else {
                                Bulk.update({
                                    name: request.name,
                                    mobileno: request.mobileno,
                                    msg: request.msg
                                }, {
                                        $set: {
                                            "error": str
                                        }
                                    }, {
                                        multi: true
                                    },
                                    (err, raw) => {
                                        if (err) {
                                            console.log(err);
                                            done();
                                        } else {
                                            Activelogs.findOneAndRemove(
                                                {
                                                    _id: log._id
                                                },
                                                (err, res) => {
                                                    if (err) {
                                                        console.log(err);
                                                        done();
                                                    } else {
                                                        console.log("Zong API ", request.mobileno, "->", str);
                                                        console.log("removed ", log._id);
                                                        done();
                                                    }
                                                }
                                            );
                                        }
                                    }
                                );
                            }
                        }
                    });
                }

            });
        }, 0);
    }else{
        var log = new Activelogs({
            apiname: "zong",
            message: request.msg,
            number: request.mobileno,
            name: request.name,
            masking: request.masking,
            language: request.language,
            type: 'bulk'
        });
        log.save((err, log) => {
            if (err) {
                console.log(err);
                done();
            } else {
                console.log("Inserted", log._id);
                setTimeout(function () {
                    var url = 'https://cbs.zong.com.pk/reachcwsv2/corporatesms.svc?wsdl';
                    var quicksmsargs = {
                        'obj_QuickSMS': {
                            'loginId': '923170000424',
                            'loginPassword': '123',
                            'Destination': request.mobileno,
                            'Mask': request.masking,
                            'Message': request.msg,
                            'UniCode': '0',
                            'ShortCodePrefered': 'n'
                        }
                    }
                    soap.createClient(url, function (err, client) {
                        if (err) {
                            console.log(err, ' QUICKSMSFORBULK CANT CONNECT TO ZONGAPICLIENT');
                            done();
                        } else {
                            client.QuickSMS(quicksmsargs, function (err, result) {
                                console.log("in client", request.mobileno)
                                if (err) {
                                    console.log(err);
                                    done();
                                    //callback(err);
                                } else {
                                    var str = result.QuickSMSResult;
                                    // console.log(str);
    
                                    if (str.indexOf("Successfully") > 0) {
                                        str = str.replace(/\s+/g, '');
                                        var colon = str.indexOf(':') + 1;
                                        var dot = str.indexOf(".");
                                        var msgid = str.substring(colon, dot);
    
                                        var msglenstr = str.indexOf('MessageLength:') + 14;
                                        var msglenstrdot = str.length - 1;
                                        var msglen = str.substring(msglenstr, msglenstrdot);
    
                                        Bulk.update({
                                            name: request.name,
                                            mobileno: request.mobileno,
                                            msg: request.msg
                                        }, {
                                                $set: {
                                                    "sentid": msgid,
                                                    "sentlength": msglen
                                                }
                                            }, {
                                                multi: true
                                            },
                                            (err, raw) => {
                                                if (err) {
                                                    console.log(err);
                                                    done();
                                                } else {
                                                    Activelogs.findOneAndRemove(
                                                        {
                                                            _id: log._id
                                                        },
                                                        (err, res) => {
                                                            if (err) {
                                                                console.log(err);
                                                                done();
                                                            } else {
                                                                console.log("Zong API ", request.mobileno, "->", str);
                                                                console.log("removed ", log._id);
                                                                done();
                                                            }
                                                        }
                                                    );
                                                }
                                            }
                                        )
                                    } else {
                                        Bulk.update({
                                            name: request.name,
                                            mobileno: request.mobileno,
                                            msg: request.msg
                                        }, {
                                                $set: {
                                                    "error": str
                                                }
                                            }, {
                                                multi: true
                                            },
                                            (err, raw) => {
                                                if (err) {
                                                    console.log(err);
                                                    done();
                                                } else {
                                                    Activelogs.findOneAndRemove(
                                                        {
                                                            _id: log._id
                                                        },
                                                        (err, res) => {
                                                            if (err) {
                                                                console.log(err);
                                                                done();
                                                            } else {
                                                                console.log("Zong API ", request.mobileno, "->", str);
                                                                console.log("removed ", log._id);
                                                                done();
                                                            }
                                                        }
                                                    );
                                                }
                                            }
                                        );
                                    }
                                }
                            });
                        }
    
                    });
                }, 0);
            }
        });
    }















}, ZongQuickSMSApiHandlerForBulkQueueSize);

ZongQuickSmsApiHandlerForBulk.drain = function () {
    console.log("All the ZONGQuickSMSApiRequestsForDynamicBulk have been completed!");
}



// --------------------------------------------------------------------------------------
var TelenorQuickSMSApiHandlerForBulkQueueSize = 2;
var TelenorQuickSmsApiHandlerForBulk = async.queue(function (request_, done) {
    // console.log('Picked ', request);
    // setTimeout(() => {
    //     console.log('Processing ',request);
    //     done();    
    // }, 1500);
    // console.log(request_);

    if(request_.resurrect == true){
        request_.msg = encodeURIComponent(request_.msg);
        request_.msg = request_.msg.replace("%20", "+");
        var telenorAPIUrl = "";
        setTimeout(() => {
            // request for api token
            request("https://telenorcsms.com.pk:27677/corporate_sms2/api/auth.jsp?msisdn=923453910292&password=qaz1wertyuiop123", function (err, resp, body) {
                if (err) {
                    console.log(err);
                    done();
                } else {
                    parser.parseString(body, function (err, ob) {
                        if (ob.corpsms.response[0] == 'OK') {
                            // set the telenor api token
                            telenor_api_token = ob.corpsms.data[0];

                            telenorAPIUrl = "https://telenorcsms.com.pk:27677/corporate_sms2/api/sendsms.jsp?session_id=" + telenor_api_token + "&to=" + request_.mobileno + "&text=" + request_.msg;
                            if (request_.language != "english") {
                                telenorAPIUrl = telenorAPIUrl + "&unicode=true"
                            }

                            if (request_.masking != "default") {
                                telenorAPIUrl = telenorAPIUrl + "&mask=" + request_.masking;
                            }

                            // request the telenor msging api
                            request(telenorAPIUrl, function (err, resp, body) {
                                if (err) {
                                    console.log(err);
                                    done();
                                } else {
                                    parser.parseString(body, function (err, qmsg) {
                                        if (qmsg.corpsms.response[0] == 'OK') {
                                            // update the respective message in db
                                            Bulk.update(
                                                {
                                                    name: request_.name,
                                                    mobileno: request_.mobileno
                                                },
                                                {
                                                    sentid: qmsg.corpsms.data[0],
                                                    sentlength: request_.msg.length
                                                },
                                                {
                                                    multi: true
                                                },
                                                (err, raws) => {
                                                    if (err) {
                                                        console.log(err);
                                                        done();
                                                    } else {
                                                        console.log(raws)
                                                        Activelogs.findOneAndRemove(
                                                            {
                                                                _id: request_.logid
                                                            },
                                                            (err, res) => {
                                                                if (err) {
                                                                    console.log(err);
                                                                    done();
                                                                } else {
                                                                    console.log("Telenor API ", request_.mobileno, "->", qmsg.corpsms.data[0]);
                                                                    console.log("removed ", request_.logid);
                                                                    done();
                                                                }
                                                            }
                                                        );
                                                    }
                                                }
                                            )

                                            // Bulk.update({
                                            //     name: request_.name,
                                            //     mobileno: request_.mobileno,
                                            //     msg: request_.msg
                                            // }, 
                                            // {
                                            //     sentid: qmsg.corpsms.data[0],
                                            //     sentlength: request_.msg.length
                                            // }, {
                                            //         multi: true
                                            //     },
                                            //     (err, raw) => {
                                            //         if (err) {
                                            //             console.log(err);
                                            //             done();
                                            //         } else {
                                            //             console.log(raw)
                                            //             Activelogs.findOneAndRemove(
                                            //                 {
                                            //                     _id:log._id
                                            //                 },
                                            //                 (err,res)=>{
                                            //                     if(err){
                                            //                         console.log(err);
                                            //                         done();
                                            //                     }else{
                                            //                         console.log("Telenor API ",request_.mobileno,"->",qmsg.corpsms.data[0]);
                                            //                         console.log("removed ",log._id);
                                            //                         done();
                                            //                     }
                                            //                 }
                                            //             );
                                            //         }
                                            //     }
                                            // );
                                        } else {
                                            Bulk.update({
                                                name: request_.name,
                                                mobileno: request_.mobileno
                                            },
                                                {
                                                    error: qmsg.corpsms.data[0]
                                                }, {
                                                    multi: true
                                                },
                                                (err, raw) => {
                                                    if (err) {
                                                        console.log(err);
                                                        done();
                                                    } else {
                                                        Activelogs.findOneAndRemove(
                                                            {
                                                                _id: log._id
                                                            },
                                                            (err, res) => {
                                                                if (err) {
                                                                    console.log(err);
                                                                    done();
                                                                } else {
                                                                    console.log("Telenor API ", request_.mobileno, "->", qmsg.corpsms.data[0]);
                                                                    console.log("removed ", log._id);
                                                                    done();
                                                                }
                                                            }
                                                        );
                                                    }
                                                }
                                            );
                                        }
                                    })
                                }
                            });

                        } else {

                            console.log(ob.corpsms.data[0], ' in telenorAPI ', new Date());
                            done();
                        }
                    })

                }

            });

        }, 0);
    }else{
        var log = new Activelogs({
            apiname: "telenor",
            message: request_.msg,
            number: request_.mobileno,
            name: request_.name,
            masking: request_.masking,
            language: request_.language,
            type: 'bulk'
        });
    
        log.save((err, log) => {
            if (err) {
                console.log(err);
                done();
            } else {
                console.log("Inserted", log._id);
                request_.msg = encodeURIComponent(request_.msg);
                request_.msg = request_.msg.replace("%20", "+");
                var telenorAPIUrl = "";
                setTimeout(() => {
                    // request for api token
                    request("https://telenorcsms.com.pk:27677/corporate_sms2/api/auth.jsp?msisdn=923453910292&password=qaz1wertyuiop123", function (err, resp, body) {
                        if (err) {
                            console.log(err);
                            done();
                        } else {
                            parser.parseString(body, function (err, ob) {
                                if (ob.corpsms.response[0] == 'OK') {
                                    // set the telenor api token
                                    telenor_api_token = ob.corpsms.data[0];
    
                                    telenorAPIUrl = "https://telenorcsms.com.pk:27677/corporate_sms2/api/sendsms.jsp?session_id=" + telenor_api_token + "&to=" + request_.mobileno + "&text=" + request_.msg;
                                    if (request_.language != "english") {
                                        telenorAPIUrl = telenorAPIUrl + "&unicode=true"
                                    }
    
                                    if (request_.masking != "default") {
                                        telenorAPIUrl = telenorAPIUrl + "&mask=" + request_.masking;
                                    }
    
                                    // request the telenor msging api
                                    request(telenorAPIUrl, function (err, resp, body) {
                                        if (err) {
                                            console.log(err);
                                            done();
                                        } else {
                                            parser.parseString(body, function (err, qmsg) {
                                                if (qmsg.corpsms.response[0] == 'OK') {
                                                    // update the respective message in db
                                                    Bulk.update(
                                                        {
                                                            name: request_.name,
                                                            mobileno: request_.mobileno
                                                        },
                                                        {
                                                            sentid: qmsg.corpsms.data[0],
                                                            sentlength: request_.msg.length
                                                        },
                                                        {
                                                            multi: true
                                                        },
                                                        (err, raws) => {
                                                            if (err) {
                                                                console.log(err);
                                                                done();
                                                            } else {
                                                                console.log(raws)
                                                                Activelogs.findOneAndRemove(
                                                                    {
                                                                        _id: log._id
                                                                    },
                                                                    (err, res) => {
                                                                        if (err) {
                                                                            console.log(err);
                                                                            done();
                                                                        } else {
                                                                            console.log("Telenor API ", request_.mobileno, "->", qmsg.corpsms.data[0]);
                                                                            console.log("removed ", log._id);
                                                                            done();
                                                                        }
                                                                    }
                                                                );
                                                            }
                                                        }
                                                    )
    
                                                    // Bulk.update({
                                                    //     name: request_.name,
                                                    //     mobileno: request_.mobileno,
                                                    //     msg: request_.msg
                                                    // }, 
                                                    // {
                                                    //     sentid: qmsg.corpsms.data[0],
                                                    //     sentlength: request_.msg.length
                                                    // }, {
                                                    //         multi: true
                                                    //     },
                                                    //     (err, raw) => {
                                                    //         if (err) {
                                                    //             console.log(err);
                                                    //             done();
                                                    //         } else {
                                                    //             console.log(raw)
                                                    //             Activelogs.findOneAndRemove(
                                                    //                 {
                                                    //                     _id:log._id
                                                    //                 },
                                                    //                 (err,res)=>{
                                                    //                     if(err){
                                                    //                         console.log(err);
                                                    //                         done();
                                                    //                     }else{
                                                    //                         console.log("Telenor API ",request_.mobileno,"->",qmsg.corpsms.data[0]);
                                                    //                         console.log("removed ",log._id);
                                                    //                         done();
                                                    //                     }
                                                    //                 }
                                                    //             );
                                                    //         }
                                                    //     }
                                                    // );
                                                } else {
                                                    Bulk.update({
                                                        name: request_.name,
                                                        mobileno: request_.mobileno
                                                    },
                                                        {
                                                            error: qmsg.corpsms.data[0]
                                                        }, {
                                                            multi: true
                                                        },
                                                        (err, raw) => {
                                                            if (err) {
                                                                console.log(err);
                                                                done();
                                                            } else {
                                                                Activelogs.findOneAndRemove(
                                                                    {
                                                                        _id: log._id
                                                                    },
                                                                    (err, res) => {
                                                                        if (err) {
                                                                            console.log(err);
                                                                            done();
                                                                        } else {
                                                                            console.log("Telenor API ", request_.mobileno, "->", qmsg.corpsms.data[0]);
                                                                            console.log("removed ", log._id);
                                                                            done();
                                                                        }
                                                                    }
                                                                );
                                                            }
                                                        }
                                                    );
                                                }
                                            })
                                        }
                                    });
    
                                } else {
    
                                    console.log(ob.corpsms.data[0], ' in telenorAPI ', new Date());
                                    done();
                                }
                            })
    
                        }
    
                    });
    
                }, 0);
            }
        });
    
    }






}, TelenorQuickSMSApiHandlerForBulkQueueSize);

TelenorQuickSmsApiHandlerForBulk.drain = function () {
    console.log("All the TelenorQuickSMSApiForBulk Requests have been completed!");
}


// --------------------------------------------------------------------------
// drain the outbox
// zong quicksmsAPI for dynamic bulks
var DrainOutbox = 3;
var DrainOutboxHandler = async.queue(function (request, done) {
    // console.log('Picked ', request);
    setTimeout(() => {
        Quick.update({
            _id: request._id
        }, {
                $set: {
                    "sentid": "132"
                }
            }, {
                multi: true
            },
            (err, raw) => {
                if (err) {
                    console.log(err);
                    done();
                } else {
                    console.log(raw);
                    done()
                }
            }
        );
    }, 1000);
}, DrainOutbox);
DrainOutboxHandler.drain = function () {
    console.log("All the Drain have been completed!");
}


// Priority drain
var DrainOutboxPri = 50;
var DrainOutboxPriHandler = async.queue(function (request, done) {
    // console.log('Picked ', request);
    setTimeout(() => {
        Quick.update({
            _id: request._id,
            priority: "1"
        }, {
                $set: {
                    "sentid": "132"
                }
            }, {
                multi: true
            },
            (err, raw) => {
                if (err) {
                    console.log(err);
                    done();
                } else {
                    console.log(raw);
                    done()
                }
            }
        );
    }, 1000);
}, DrainOutboxPri);
DrainOutboxPriHandler.drain = function () {
    console.log("All the PriDrain have been completed!");
}

// ----------------------------------------------------------------------------------------------------
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

router.get('/resurrectactivelogs', (req, res) => {

    Activelogs.find({}, (err, docs) => {
        if (err) {
            res.send(err);
        } else {
            docs.forEach(function (element) {
                if (element.apiname == 'telenor') {
                    if (element.type == 'quick') {
                        var obj = {
                            name: element.name,
                            masking: element.masking,
                            number: element.number,
                            msg: element.message,
                            language: element.language,
                            resurrect:true,
                            logid:element._id
                        }
                        TelenorQuickSmsApiHandler.push(obj);
                    } else {
                        var obj = {
                            name: element.name,
                            masking: element.masking,
                            number: element.number,
                            msg: element.message,
                            language: element.language,
                            resurrect:true,
                            logid:element._id
                        }
                        TelenorQuickSmsApiHandlerForBulk.push(obj);
                    }

                } else if (element.apiname == 'zong') {
                    if (element.type == 'quick') {
                        var obj = {
                            name: element.name,
                            masking: element.masking,
                            number: element.number,
                            msg: element.message,
                            language: element.language,
                            resurrect:true,
                            logid:element._id
                        }
                        ZongQuickSmsApiHandler.push(obj);
                    } else {
                        var obj = {
                            name: element.name,
                            masking: element.masking,
                            number: element.number,
                            msg: element.message,
                            language: element.language,
                            resurrect:true,
                            logid:element._id
                        }
                        ZongQuickSmsApiHandlerForBulk.push(obj);
                    }
                }
            }, this);
            isServerOpen = true;
            return res.json({
                success: true,
                resurrectedcount: docs.length
            })
        }
    })
});

router.get('/servermaintain/:value', (req, res) => {
    if (req.params.value == 1) {
        isServerOpen = true
    } else {
        isServerOpen = false
    }
    res.json({
        ServerOpen: isServerOpen
    });
});

router.get('/apiinfo', (req, res) => {
    res.json({
        telenorAPIQL: TelenorQuickSmsApiHandler.length(),
        telenorAPIBL: TelenorQuickSmsApiHandlerForBulk.length(),
        zongAPIQL: ZongQuickSmsApiHandler.length(),
        zongAPIBL: ZongQuickSmsApiHandlerForBulk.length(),
    });
});

router.get('/apipause', (req, res) => {
    TelenorQuickSmsApiHandler.pause();
    TelenorQuickSmsApiHandlerForBulk.pause();
    ZongQuickSmsApiHandler.pause();
    ZongQuickSmsApiHandlerForBulk.pause();

    if (TelenorQuickSmsApiHandler.paused && ZongQuickSmsApiHandler.paused && TelenorQuickSmsApiHandlerForBulk.paused && ZongQuickSmsApiHandlerForBulk.paused) {
        res.json({
            telenorAPI: 'Paused',
            telenorAPIQL: TelenorQuickSmsApiHandler.length(),
            zongAPIQL: ZongQuickSmsApiHandler.length(),
            telenorAPIBL: TelenorQuickSmsApiHandlerForBulk.length(),
            zongAPIBL: ZongQuickSmsApiHandlerForBulk.length()
        });
    } else {
        res.json({
            telenorAPI: 'Not Paused',
            telenorAPIQL: TelenorQuickSmsApiHandler.length(),
            zongAPIQL: ZongQuickSmsApiHandler.length(),
            telenorAPIBL: TelenorQuickSmsApiHandlerForBulk.length(),
            zongAPIBL: ZongQuickSmsApiHandlerForBulk.length()
        });
    }

});

router.get('/apiresume', (req, res) => {
    TelenorQuickSmsApiHandler.resume();
    TelenorQuickSmsApiHandlerForBulk.resume();
    ZongQuickSmsApiHandler.resume();
    ZongQuickSmsApiHandlerForBulk.resume();

    if (!TelenorQuickSmsApiHandler.paused && !ZongQuickSmsApiHandler.paused && !TelenorQuickSmsApiHandlerForBulk.paused && !ZongQuickSmsApiHandlerForBulk.paused) {
        res.json({
            telenorAPI: 'Resumed',
            telenorAPIQL: TelenorQuickSmsApiHandler.length(),
            zongAPIQL: ZongQuickSmsApiHandler.length(),
            telenorAPIBL: TelenorQuickSmsApiHandlerForBulk.length(),
            zongAPIBL: ZongQuickSmsApiHandlerForBulk.length()
        });
    } else {
        res.json({
            telenorAPI: 'Not Resumed',
            telenorAPIQL: TelenorQuickSmsApiHandler.length(),
            zongAPIQL: ZongQuickSmsApiHandler.length(),
            telenorAPIBL: TelenorQuickSmsApiHandlerForBulk.length(),
            zongAPIBL: ZongQuickSmsApiHandlerForBulk.length()
        });
    }
});

router.get('/drain', (req, res) => {

    Quick.find({
        sentid: "0"
    },
        (err, docx) => {
            docx = shuffle(docx);
            docx.forEach(element => {
                DrainOutboxHandler.push({
                    _id: element._id
                });
            });
            res.json({
                success: true
            })
        });


})

router.get('/drain/priority', (req, res) => {

    Quick.find({
        sentid: "0",
        priority: "1"
    },
        (err, docx) => {
            docx = shuffle(docx);
            docx.forEach(element => {
                DrainOutboxPriHandler.push({
                    _id: element._id
                });
            });
            res.json({
                success: true
            })
        });


})

// send a whatsapp message 
router.post('/digital/register', (req, res) => {

    var name = req.body.name;
    var mobilenos = req.body.mobilenos;
    mobilenos = Array.from(new Set(mobilenos));
    var msg = req.body.message;
    msg = CryptoJS.AES.encrypt(msg.trim(), req.body.createdby.trim()).toString();
    var createdby = req.body.createdby;
    var created = moment.utc().add(5, 'hours').toDate();

    console.time("insertbulk");
    var bulk = Digital.collection.initializeOrderedBulkOp();
    for (var i = 0; i < mobilenos.length; i++) {
        var obj = {
            name: name,
            mobileno: mobilenos[i],
            msg: msg,
            createdby: createdby,
            created: created,
            status: "0"
        };
        bulk.insert(obj);
        if (i % 500 == 0) {
            console.log(i + 500 / 500, "#bulk inserted with ", i + 1, " values");
            bulk.execute();
            bulk = Digital.collection.initializeOrderedBulkOp();
        }
        //jsonArr.push(obj);
    }
    var lim = bulk.length;
    console.log("inserting remaining values ", lim, " values");

    bulk.execute().catch(any => {
        console.log('empty ops in whatsapp remaining bucket');

    });

    console.log("inserted ", lim, " values");
    console.timeEnd("insertbulk");
    console.log("insertend");
    // for (let index = 0; index < mobilenos.length; index++) {
    //     var obj = {
    //         name: req.body.name,
    //         masking: req.body.masking,
    //         number: mobilenos[index],
    //         msg: req.body.msg,
    //         account: req.body.account,
    //         password: req.body.password
    //     }
    //     ZongQuickSmsApiHandler.push(obj);
    // }
    res.json({
        success: true
    });
});

router.post('/digital/static/register', (req, res) => {


    User.findOne(
        {
            email: req.body.createdby,
            expirybundle: {
                $gte: moment.utc().add(5, 'hours').toDate()
            }
        },
        (err, docx) => {
            if (err) {
                res.json({
                    success: false,
                    error: err
                });
            }
            if (docx) {
                var numberscsv = [];
                let bulk = {
                    name: req.body.name,
                    language: req.body.language,
                    type: req.body.type,
                    campaign: req.body.campaign,
                    path: req.body.path,
                    msg: req.body.msg.trim(),
                    createdby: req.body.createdby,
                    created: moment.utc().add(5, 'hours').toDate()
                }

                // this is for static bulk
                filepath = path.join(__dirname, '../uploads') + '/' + bulk.path;
                csv.fromStream(request(bulk.path), {
                    delimiter: ';',
                    objectMode: true,
                    headers: false
                })
                    .on('data', function (data) {
                        numberscsv.push(data[0]);
                        //console.log(data);  
                    })
                    .on('end', function () {
                        //  add all the values into the database
                        numberscsv = Array.from(new Set(numberscsv));

                        if (docx.watp > 0) {
                            if (numberscsv.length <= docx.creditwhatsapp) {
                                console.time("insertdigital")
                                var a = now();
                                var _intended = '';
                                var bulkb = Digital.collection.initializeOrderedBulkOp();
                                for (var i = 0; i < numberscsv.length; i++) {
                                    //jsonArr.push({ id: i, name: name });
                                    var obj = {
                                        name: bulk.name,
                                        msg: bulk.msg,
                                        createdby: bulk.createdby,
                                        created: bulk.created,
                                        mobileno: numberscsv[i],
                                        status: "0"
                                    };
                                    bulkb.insert(obj);
                                    if (i % 500 == 0) {
                                        console.log(i + 500 / 500, "#bulk inserted with ", i + 1, " values");
                                        bulkb.execute();
                                        bulkb = Digital.collection.initializeOrderedBulkOp();
                                    }
                                    //jsonArr.push(obj);
                                }
                                var lim = bulkb.length;
                                console.log("inserting remaining values ", lim, " values");
                                bulkb.execute().catch(reason => {
                                    console.log("empty ops in bulksmsdynamic exec");
                                });
                                console.log("inserted ", lim, " values");
                                console.timeEnd("insertdigital");
                                var b = now();
                                console.log("insertend");


                                for (let index = 0; index < numberscsv.length; index++) {
                                    var obj = {
                                        name: req.body.name,
                                        mobileno: numberscsv[index],
                                        msg: req.body.msg
                                    }
                                    //ZongQuickSmsApiHandlerForBulk.push(obj);
                                }


                                docx.creditwhatsapp = docx.creditwhatsapp - numberscsv.length;
                                docx.save(function (err) {
                                    if (err) {
                                        res.json({ success: false, error: err })
                                    }
                                    res.json({
                                        success: true,
                                        timetaken: (b - a).toFixed(4),
                                        records: numberscsv.length
                                    });
                                });

                            } else {
                                res.json({ success: false, error: 'Not enough resources.' })
                            }
                        } else {
                            res.json({ success: false, error: 'Not enough throuput.' })
                        }


                    });
            } else {
                res.json({
                    success: false,
                    error: 'Configuration Expired!'
                });
            }

        }
    );
});

router.post('/digital/dynamic/register', (req, res) => {

    User.findOne(
        {
            email: req.body.createdby,
            expirybundle: {
                $gte: moment.utc().add(5, 'hours').toDate()
            }
        },
        (err, docx) => {
            if (err) {
                res.json({ success: false, error: err })
            }
            if (docx) {


                var bulk = {
                    name: req.body.name,
                    language: req.body.language,
                    type: req.body.type,
                    campaign: req.body.campaign,
                    path: req.body.path,
                    msg: req.body.msg,
                    createdby: req.body.createdby,
                    created: moment.utc().add(5, 'hours').toDate()
                }


                var objarr = [];
                var sometxt = '';
                //var bulkpath = 'dynamic.csv';
                var filepath = path.join(__dirname, '../uploads') + '/' + bulk.path;
                csv.fromStream(request(bulk.path), {
                    delimiter: ';',
                    objectMode: true,
                    headers: true,
                    ignoreEmpty: true
                })
                    .on('data', function (data) {
                        sometxt = bulk.msg;
                        sometxt =
                            sometxt
                                .replace("[var1]", data.var1)
                                .replace("[var2]", data.var2)
                                .replace("[var3]", data.var3)
                                .replace("[var4]", data.var4)
                                .replace("[var5]", data.var5);
                        let obj = {
                            mobileno: data.mobileno,
                            msg: sometxt
                        };
                        objarr.push(obj);

                    })
                    .on('end', function () {

                        if (docx.watp > 0) {
                            if (objarr.length <= docx.creditwhatsapp) {

                                //  add all the values into the database
                                console.time("insertbulk")
                                var a = now();
                                var _intended = '';
                                var bulkb = Digital.collection.initializeOrderedBulkOp();
                                for (var i = 0; i < objarr.length; i++) {

                                    var obj = {
                                        name: bulk.name,
                                        msg: objarr[i].msg,
                                        createdby: bulk.createdby,
                                        created: bulk.created,
                                        mobileno: objarr[i].mobileno,
                                        status: "0"
                                    };
                                    bulkb.insert(obj);
                                    if (i % 500 == 0) {
                                        console.log(i + 500 / 500, "#bulk inserted with ", i + 1, " values");
                                        bulkb.execute();
                                        bulkb = Digital.collection.initializeOrderedBulkOp();
                                    }
                                    //jsonArr.push(obj);
                                }
                                var lim = bulkb.length;
                                console.log("inserting remaining values ", lim, " values");
                                bulkb.execute().catch(reason => {
                                    console.log("empty ops in bulksmsdynamic exec");
                                });
                                console.log("inserted ", lim, " values");
                                console.timeEnd("insertbulk");
                                var b = now();
                                console.log("insertend");


                                for (let index = 0; index < objarr.length; index++) {
                                    var obj = {
                                        name: req.body.name,
                                        mobileno: objarr[index].mobileno,
                                        msg: objarr[index].msg,
                                    }
                                    //ZongQuickSmsApiHandlerForBulk.push(obj);
                                }

                                docx.creditwhatsapp = docx.creditwhatsapp - objarr.length;
                                docx.save(function (err) {
                                    if (err) {
                                        res.json({ success: false, error: err })
                                    }
                                    res.json({
                                        success: true,
                                        timetaken: (b - a).toFixed(4),
                                        records: objarr.length
                                    });
                                })


                            } else {
                                res.json({ success: false, error: 'Not enough resources.' })
                            }
                        } else {
                            res.json({ success: false, error: 'Not enough throuput.' })
                        }

                    });
            } else {
                res.json({ success: false, error: 'Configuration Expired.' })
            }
        }
    )

});

router.get('/digital/:query', (req, resp) => {

    // resp.json({
    //     success:true,
    //     data:JSON.parse(req.params.query)
    // })

    // Quick.aggregate([
    //     { $match: { createdby: req.params.email } },
    //     { $group: { _id: "$name", quick: { $push: "$$ROOT" } } }
    // ], function (err, quick) {
    //     console.log(err);
    //     console.log(quick);

    //     resp.json({
    //         success: true,
    //         data: quick
    //     });
    // },{allowDiskUse:true});

    // Quick.aggregate([
    //     { $match: { createdby: req.params.email } },
    //     { $group: { _id: "$name", quick: { $push: "$$ROOT" } } }
    // ]).allowDiskUse(true).exec((err,quick)=>{
    //     console.log(err);
    //     console.log(quick);

    //     resp.json({
    //         success: true,
    //         data: quick
    //     });
    // });

    //var inputDate = new Date(myDate.toISOString());

    //moment(obj.datefrom).startOf('day').format()
    //moment(obj.dateto).endOf('day').format()
    var obj = JSON.parse(req.params.query);

    console.log('start', moment.utc(obj.datefrom).startOf('day').toDate());
    console.log('end', moment.utc(obj.dateto).endOf('day').toDate());

    Digital.find({
        createdby: obj.email,
        created: {
            $lte: moment.utc(obj.dateto).endOf('day').toDate(),
            $gte: moment.utc(obj.datefrom).startOf('day').toDate()
        }
    },
        (err, docs) => {
            if (err) {
                console.log(err);
            }
            //console.log(quick);

            resp.json({
                success: true,
                data: docs
            });
        });




    // let query = 
    // {
    //     $and:[
    //         {createdby:req.params.email},
    //         {type:'dynamic'}
    //     ]

    // };
    // Campaignm.find(query,(err,doc)=>{
    //     if(err){
    //         throw err;
    //     }else{
    //         //console.log(doc);
    //         resp.json({
    //             success:true,
    //             data:doc
    //         });
    //     }
    // });
});

router.get('/digital/dump/:query', (req, resp) => {

    var obj = JSON.parse(req.params.query);


    Digital.find({
        created: {
            $lte: moment.utc(obj.dateto).endOf('day').toDate(),
            $gte: moment.utc(obj.datefrom).startOf('day').toDate()
        }
    },
        (err, docs) => {
            if (err) {
                console.log(err);
            }
            //console.log(quick);

            resp.json({
                success: true,
                data: docs
            });
        });


});

router.delete('/digital/:name', (req, resp) => {
    let query = {
        name: req.params.name
    };
    Digital.remove(query, (err) => {
        if (err) {
            resp.json({
                success: false,
                msg: 'The whatsappmsg was not deleted'
            });
        } else {
            resp.json({
                success: true,
                msg: 'The whatsapp was deleted'
            });
        }
    });
});


// send a quick message maslad
router.post('/quick/register', (req, res) => {

    if (!isServerOpen) {
        return res.json({
            success: false,
            error: "server under maintenance, please contact support@mangotree.com"
        })
    }

    var email = req.body.createdby;
    var name = req.body.name;
    var language = req.body.language;
    var masking = req.body.masking;
    var mobilenos = req.body.mobilenos;
    //var mobarr = mobilenos.trim().split(',');
    mobilenos = Array.from(new Set(mobilenos));


    var msg = req.body.msg;
    //msg = CryptoJS.AES.encrypt(msg.trim(),req.body.createdby.trim()).toString();
    var msgchars = req.body.msgchars;
    var noofmsgs = req.body.noofmsgs;
    var preference = req.body.preference;
    var createdby = req.body.createdby;
    var created = moment.utc().add(5, 'hours').toDate()

    User.findOne(
        {
            email: email,
            expirybundle: {
                $gte: moment.utc().add(5, 'hours').toDate()
            }
        },
        (err, docx) => {
            if (err) {
                res.json({
                    success: false,
                    error: err
                });
            }
            if (docx) {

                if (docx.smstp > 0) {
                    if (mobilenos.length <= docx.creditsms) {

                        Mask.findOne(
                            {
                                createdby: docx.email,
                                mask: masking,
                                status: 'activated'
                            },
                            (err, mask) => {
                                if (err) {
                                    res.json({
                                        success: false,
                                        error: err
                                    })
                                }
                                if (!mask) {
                                    res.json({
                                        success: false,
                                        error: 'invalid masking'
                                    })
                                } else {

                                    var jsonArr = []
                                    var apiarr = [];

                                    // console.time("insertbulk")

                                    var bulk = Quick.collection.initializeOrderedBulkOp();
                                    for (var i = 0; i < mobilenos.length; i++) {
                                        var _intended = '';
                                        var _message = "";
                                        jsonArr.push({
                                            id: i,
                                            name: name
                                        });

                                        if (mobilenos[i].substring(0, 4) === '9230') {
                                            _intended = 'jazz'
                                        } else if (mobilenos[i].substring(0, 4) === '9231') {
                                            _intended = 'zong'
                                        } else if (mobilenos[i].substring(0, 4) === '9232') {
                                            _intended = 'warid'
                                        } else if (mobilenos[i].substring(0, 4) === '9233') {
                                            _intended = 'ufone'
                                        } else if (mobilenos[i].substring(0, 4) === '9234') {
                                            _intended = 'telenor'
                                        } else if (mobilenos[i].substring(0, 4) === '9235') {
                                            _intended = 'sco'
                                        } else if (mobilenos[i].substring(0, 4) === '9236') {
                                            _intended = 'pri'
                                        }

                                        if(docx.encryption == 'enable'){
                                            if(docx.type == 'omo'){
                                                _message = CryptoJS.AES.encrypt(msg.trim(), docx.enckey.trim()).toString();
                                            }else{
                                                _message = CryptoJS.AES.encrypt(msg.trim(), req.body.createdby.trim()).toString();
                                            }
                                        }else{
                                            _message = msg;
                                        }

                                        //msg = CryptoJS.AES.encrypt(msg.trim(),req.body.createdby.trim()).toString();
                                        if (mask.type === 'whitelisted') {
                                            var obj = {
                                                name: name,
                                                language: language,
                                                masking: masking,
                                                mobileno: mobilenos[i],                                                                                                
                                                msg: _message,
                                                msgchars: msgchars,
                                                noofmsgs: noofmsgs,
                                                preference: preference,
                                                createdby: createdby,
                                                created: created,
                                                mnp: '0',
                                                intended: _intended,
                                                telco: _intended,
                                                priority: "0",
                                                sentid: "0",
                                                sentlength: "0",
                                                encrypted: docx.encryption == 'enable' ? true : false
                                            };
                                            apiarr.push(obj);
                                        }
                                        else if (mask.type === _intended) {
                                            var obj = {
                                                name: name,
                                                language: language,
                                                masking: masking,
                                                mobileno: mobilenos[i],
                                                msg: _message,
                                                msgchars: msgchars,
                                                noofmsgs: noofmsgs,
                                                preference: preference,
                                                createdby: createdby,
                                                created: created,
                                                mnp: '0',
                                                intended: _intended,
                                                telco: _intended,
                                                priority: "0",
                                                sentid: "0",
                                                sentlength: "0",
                                                encrypted: docx.encryption == 'enable' ? true : false
                                            };
                                            apiarr.push(obj);
                                        } else {
                                            var obj = {
                                                name: name,
                                                language: language,
                                                masking: masking,
                                                mobileno: mobilenos[i],
                                                msg: _message,
                                                msgchars: msgchars,
                                                noofmsgs: noofmsgs,
                                                preference: preference,
                                                createdby: createdby,
                                                created: created,
                                                mnp: '0',
                                                intended: _intended,
                                                telco: _intended,
                                                priority: "0",
                                                sentid: "0",
                                                sentlength: "0",
                                                encrypted: docx.encryption == 'enable' ? true : false,
                                                error: 'wrong masking used'
                                            };
                                        }

                                        bulk.insert(obj);
                                        if (i % 500 == 0) {
                                            // console.log(i + 500 / 500, "#bulk inserted with ", i + 1, " values");
                                            bulk.execute();
                                            bulk = Quick.collection.initializeOrderedBulkOp();
                                        }
                                        //jsonArr.push(obj);
                                    }

                                    var lim = bulk.length;
                                    // console.log("inserting remaining values ", lim, " values");

                                    bulk.execute().catch(any => {
                                        // console.log('empty ops in quick remaining bucket');

                                    });

                                    // console.log("inserted ", lim, " values");
                                    // console.timeEnd("insertbulk");
                                    // console.log("insertend");

                                    for (let index = 0; index < apiarr.length; index++) {

                                        var obj = {
                                            name: apiarr[index].name,
                                            masking: apiarr[index].masking,
                                            number: apiarr[index].mobileno,
                                            msg:apiarr[index].msg,
                                            // msg: docx.encryption == 'enable' ? CryptoJS.AES.encrypt(msg.trim(), apiarr[index].createdby.trim()).toString() : msg,
                                            language: apiarr[index].language
                                        }
                                        TelenorQuickSmsApiHandler.push(obj);






                                        // if (apiarr[index].telco == 'telenor') {
                                        //     var obj = {
                                        //         name: apiarr[index].name,
                                        //         masking: apiarr[index].masking,
                                        //         number: apiarr[index].mobileno,
                                        //         msg:apiarr[index].msg,
                                        //         // msg: docx.encryption == 'enable' ? CryptoJS.AES.encrypt(msg.trim(), apiarr[index].createdby.trim()).toString() : msg,
                                        //         language: apiarr[index].language
                                        //     }
                                        //     // TelenorQuickSmsApiHandler.push(obj);
                                        // }
                                        // else if (apiarr[index].telco == 'zong') {
                                        //     var obj = {
                                        //         name: apiarr[index].name,
                                        //         masking: apiarr[index].masking,
                                        //         number: apiarr[index].mobileno,
                                        //         msg:apiarr[index].msg,
                                        //         // msg: docx.encryption == 'enable' ? CryptoJS.AES.encrypt(msg.trim(), apiarr[index].createdby.trim()).toString() : msg,
                                        //         language: apiarr[index].language
                                        //     }
                                        //     // ZongQuickSmsApiHandler.push(obj);
                                        // }

                                    }

                                    // subtract the original balance
                                    docx.creditsms = docx.creditsms - apiarr.length;
                                    docx.save(function (err) {
                                        if (err) {
                                            res.json({
                                                success: false,
                                                error: err
                                            });
                                        }

                                        res.json({
                                            success: true
                                        });

                                    });
                                }
                            }
                        );

                    } else {
                        res.json({
                            success: false,
                            error: 'Not enough balance.'
                        });
                    }
                } else {
                    res.json({
                        success: false,
                        error: 'Not enough throuput.'
                    });
                }


                // user found
            } else {
                res.json({
                    success: false,
                    error: 'Configuration expired. Please renew your configuration.'
                });
            }
        });
});

router.get('/quick/:query', (req, resp) => {

    var obj = JSON.parse(req.params.query);

    Quick.find({
        createdby: obj.email,
        created: {
            $lte: moment.utc(obj.dateto).endOf('day').toDate(),
            $gte: moment.utc(obj.datefrom).startOf('day').toDate()
        }
    },
        (err, docs) => {
            if (err) {
                console.log(err);
            }
            //console.log(quick);

            resp.json({
                success: true,
                data: docs
            });
        });

});

router.get('/quick/counttelco/:query', (req, resp) => {

    var obj = JSON.parse(req.params.query);

    // Quick.find({
    //     createdby: obj.email,
    //     created: {
    //         $lte: moment.utc(obj.dateto).endOf('day').toDate(),
    //         $gte: moment.utc(obj.datefrom).startOf('day').toDate()
    //     },
    //     telco: obj.telco
    // },
    // (err, docs) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     //console.log(quick);

    //     resp.json({
    //         success: true,
    //         data: docs
    //     });
    // });

    Quick.count(
        {
            createdby: obj.email,
            created: {
                $lte: moment.utc(obj.dateto).endOf('day').toDate(),
                $gte: moment.utc(obj.datefrom).startOf('day').toDate()
            },
            telco: obj.telco
        },
        (err, count) => {
            if (err) {
                console.log(err);
            }
            resp.json({
                success: true,
                data: count
            });
        }
    )

});







// count outbox monthly

router.get('/monthcountoutboxquick/:query', (req, resp) => {

    var obj = JSON.parse(req.params.query);
    Quick.count(
        {
            createdby: obj.email,
            created: {
                $lte: moment.utc(obj.dateto).endOf('day').toDate(),
                $gte: moment.utc(obj.datefrom).startOf('day').toDate()
            },
            sentid: "0"
        },
        (err, qcount) => {
            if (err) {
                console.log(err);
            }
            resp.json({
                success: true,
                quick: qcount
            });
        }
    );
});

router.get('/monthcountoutboxbulk/:query', (req, resp) => {

    var obj = JSON.parse(req.params.query);

    Bulk.count(
        {
            createdby: obj.email,
            created: {
                $lte: moment.utc(obj.dateto).endOf('day').toDate(),
                $gte: moment.utc(obj.datefrom).startOf('day').toDate()
            },
            sentid: "0"
        },
        (err, bcount) => {
            if (err) {
                console.log(err);
            }
            resp.json({
                success: true,
                bulk: bcount
            });
        }
    );
});

router.get('/monthcountoutboxdrip/:query', (req, resp) => {

    var obj = JSON.parse(req.params.query);
    Dripbulk.count(
        {
            createdby: obj.email,
            created: {
                $lte: moment.utc(obj.dateto).endOf('day').toDate(),
                $gte: moment.utc(obj.datefrom).startOf('day').toDate()
            },
            sentid: "0"
        },
        (err, dcount) => {
            if (err) {
                console.log(err);
            }

            resp.json({
                success: true,
                drip: dcount
            });
        }
    );
});


// count sent monthly

router.get('/monthcountsentquick/:query', (req, resp) => {

    var obj = JSON.parse(req.params.query);
    Quick.count(
        {
            createdby: obj.email,
            created: {
                $lte: moment.utc(obj.dateto).endOf('day').toDate(),
                $gte: moment.utc(obj.datefrom).startOf('day').toDate()
            },
            sentid: { $ne: "0" }
        },
        (err, qcount) => {
            if (err) {
                console.log(err);
            }
            resp.json({
                success: true,
                quick: qcount
            });
        }
    );
});

router.get('/monthcountsentbulk/:query', (req, resp) => {

    var obj = JSON.parse(req.params.query);

    Bulk.count(
        {
            createdby: obj.email,
            created: {
                $lte: moment.utc(obj.dateto).endOf('day').toDate(),
                $gte: moment.utc(obj.datefrom).startOf('day').toDate()
            },
            sentid: { $ne: "0" }
        },
        (err, bcount) => {
            if (err) {
                console.log(err);
            }
            resp.json({
                success: true,
                bulk: bcount
            });
        }
    );
});

router.get('/monthcountsentdrip/:query', (req, resp) => {

    var obj = JSON.parse(req.params.query);
    Dripbulk.count(
        {
            createdby: obj.email,
            created: {
                $lte: moment.utc(obj.dateto).endOf('day').toDate(),
                $gte: moment.utc(obj.datefrom).startOf('day').toDate()
            },
            sentid: { $ne: "0" }
        },
        (err, dcount) => {
            if (err) {
                console.log(err);
            }

            resp.json({
                success: true,
                drip: dcount
            });
        }
    );
});














router.get('/monthcountoutbox/:query', (req, resp) => {

    var obj = JSON.parse(req.params.query);
    Quick.count(
        {
            createdby: obj.email,
            created: {
                $lte: moment.utc(obj.dateto).endOf('day').toDate(),
                $gte: moment.utc(obj.datefrom).startOf('day').toDate()
            },
            sentid: "0"
        },
        (err, qcount) => {
            if (err) {
                console.log(err);
            }
            Bulk.count(
                {
                    createdby: obj.email,
                    created: {
                        $lte: moment.utc(obj.dateto).endOf('day').toDate(),
                        $gte: moment.utc(obj.datefrom).startOf('day').toDate()
                    },
                    sentid: "0"
                },
                (err, bcount) => {
                    if (err) {
                        console.log(err);
                    }
                    Dripbulk.count(
                        {
                            createdby: obj.email,
                            created: {
                                $lte: moment.utc(obj.dateto).endOf('day').toDate(),
                                $gte: moment.utc(obj.datefrom).startOf('day').toDate()
                            },
                            sentid: "0"
                        },
                        (err, dcount) => {
                            if (err) {
                                console.log(err);
                            }

                            resp.json({
                                success: true,
                                quick: qcount,
                                bulk: bcount,
                                drip: dcount
                            });
                        }
                    );
                }
            );
        }
    );
});

router.get('/monthcountsent/:query', (req, resp) => {

    var obj = JSON.parse(req.params.query);
    Quick.count(
        {
            createdby: obj.email,
            created: {
                $lte: moment.utc(obj.dateto).endOf('day').toDate(),
                $gte: moment.utc(obj.datefrom).startOf('day').toDate()
            },
            sentid: { $ne: "0" }
        },
        (err, qcount) => {
            if (err) {
                console.log(err);
            }
            Bulk.count(
                {
                    createdby: obj.email,
                    created: {
                        $lte: moment.utc(obj.dateto).endOf('day').toDate(),
                        $gte: moment.utc(obj.datefrom).startOf('day').toDate()
                    },
                    sentid: { $ne: "0" }
                },
                (err, bcount) => {
                    if (err) {
                        console.log(err);
                    }
                    Dripbulk.count(
                        {
                            createdby: obj.email,
                            created: {
                                $lte: moment.utc(obj.dateto).endOf('day').toDate(),
                                $gte: moment.utc(obj.datefrom).startOf('day').toDate()
                            },
                            sentid: { $ne: "0" }
                        },
                        (err, dcount) => {
                            if (err) {
                                console.log(err);
                            }

                            resp.json({
                                success: true,
                                quick: qcount,
                                bulk: bcount,
                                drip: dcount
                            });
                        }
                    );
                }
            );
        }
    );
});

router.get('/quick/dump/:query', (req, resp) => {
    var obj = JSON.parse(req.params.query);
    Quick.find({
        created: {
            $lte: moment.utc(obj.dateto).endOf('day').toDate(),
            $gte: moment.utc(obj.datefrom).startOf('day').toDate()
        }
    },
        (err, docs) => {
            if (err) {
                resp.json({
                    success: false,
                    error: err
                });
            }
            //console.log(quick);
            resp.json({
                success: true,
                data: docs
            });
        });
});

router.delete('/quick/:name', (req, resp) => {
    let query = {
        name: req.params.name
    };

    Quick.remove(query, (err) => {
        if (err) {
            resp.json({
                success: false,
                msg: 'The quicksms was not deleted'
            });
        } else {
            resp.json({
                success: true,
                msg: 'The quicksms was deleted'
            });
        }
    });
});















router.post('/bulk/register', (req, res) => {

    if (!isServerOpen) {
        return res.json({
            success: false,
            error: "server under maintenance, please contact support@mangotree.com"
        })
    }

    var numberscsv = [];
    let bulk = {
        name: req.body.name,
        language: req.body.language,
        type: req.body.type,
        campaign: req.body.campaign,
        path: req.body.path,
        masking: req.body.masking,
        msg: req.body.msg.trim(),
        createdby: req.body.createdby,
        created: moment.utc().add(5, 'hours').toDate()
    }

    User.findOne(
        {
            email: req.body.createdby,
            expirybundle: {
                $gte: moment.utc().add(5, 'hours').toDate()
            }
        },
        (err, docx) => {
            if (err) {
                res.json({ success: false, error: err });
            }
            if (docx) {


                // user found
                // this is for static bulk
                filepath = path.join(__dirname, '../uploads') + '/' + bulk.path;
                // filepath = bulk.path;
                // console.log(filepath);
                // path.resolve(filepath)

                csv.fromStream(request(bulk.path), {
                    delimiter: ';',
                    objectMode: true,
                    headers: false
                })
                    .on('data', function (data) {
                        numberscsv.push(data[0]);
                        //console.log(data);  
                    })
                    .on('end', function () {
                        //  add all the values into the database
                        numberscsv = Array.from(new Set(numberscsv));

                        if (docx.smstp > 0) {
                            if (numberscsv.length <= docx.creditsms) {
                                // can send sms

                                Mask.findOne(
                                    {
                                        createdby: docx.email,
                                        mask: bulk.masking,
                                        status: 'activated'
                                    },
                                    (err, mask) => {
                                        if (err) {
                                            res.json({ success: false, error: err })
                                        }
                                        if (!mask) {
                                            res.json({ success: false, error: 'Invalid Mask' + mask })
                                        } else {
                                            // console.time("insertbulk")
                                            var a = now();

                                            var apiarr = [];
                                            var obj = {};

                                            var bulkb = Bulk.collection.initializeOrderedBulkOp();
                                            for (var i = 0; i < numberscsv.length; i++) {
                                                var _intended = ''; var _message = "";
                                                //jsonArr.push({ id: i, name: name });

                                                if (numberscsv[i].substring(0, 4) === '9230') {
                                                    _intended = 'jazz'
                                                } else if (numberscsv[i].substring(0, 4) === '9231') {
                                                    _intended = 'zong'
                                                } else if (numberscsv[i].substring(0, 4) === '9232') {
                                                    _intended = 'warid'
                                                } else if (numberscsv[i].substring(0, 4) === '9233') {
                                                    _intended = 'ufone'
                                                } else if (numberscsv[i].substring(0, 4) === '9234') {
                                                    _intended = 'telenor'
                                                } else if (numberscsv[i].substring(0, 4) === '9235') {
                                                    _intended = 'sco'
                                                } else if (numberscsv[i].substring(0, 4) === '9236') {
                                                    _intended = 'pri'
                                                }

                                                if(docx.encryption == 'enable'){
                                                    if(docx.type == 'omo'){
                                                        _message = CryptoJS.AES.encrypt(req.body.msg.trim(), docx.enckey.trim()).toString();
                                                    }else{
                                                        _message = CryptoJS.AES.encrypt(req.body.msg.trim(), req.body.createdby.trim()).toString();
                                                    }
                                                }else{
                                                    _message = req.body.msg.trim();
                                                }

                                                if (mask.type === 'whitelisted') {
                                                    obj = {
                                                        name: bulk.name,
                                                        language: bulk.language,
                                                        type: bulk.type,
                                                        campaign: bulk.campaign,
                                                        path: bulk.path,
                                                        masking: bulk.masking,
                                                        msg: _message,
                                                        createdby: bulk.createdby,
                                                        created: bulk.created,
                                                        mnp: "0",
                                                        intended: _intended,
                                                        telco: _intended,
                                                        priority: "0",
                                                        mobileno: numberscsv[i],
                                                        sentid: "0",
                                                        sentlength: "0",
                                                        encrypted: docx.encryption == 'enable' ? true : false
                                                    };
                                                    apiarr.push(obj);
                                                } else if (mask.type === _intended) {
                                                    obj = {
                                                        name: bulk.name,
                                                        language: bulk.language,
                                                        type: bulk.type,
                                                        campaign: bulk.campaign,
                                                        path: bulk.path,
                                                        masking: bulk.masking,
                                                        msg: _message,
                                                        createdby: bulk.createdby,
                                                        created: bulk.created,
                                                        mnp: "0",
                                                        intended: _intended,
                                                        telco: _intended,
                                                        priority: "0",
                                                        mobileno: numberscsv[i],
                                                        sentid: "0",
                                                        sentlength: "0",
                                                        encrypted: docx.encryption == 'enable' ? true : false
                                                    };
                                                    apiarr.push(obj);
                                                } else {
                                                    obj = {
                                                        name: bulk.name,
                                                        language: bulk.language,
                                                        type: bulk.type,
                                                        campaign: bulk.campaign,
                                                        path: bulk.path,
                                                        masking: bulk.masking,
                                                        msg: _message,
                                                        createdby: bulk.createdby,
                                                        created: bulk.created,
                                                        mnp: "0",
                                                        intended: _intended,
                                                        telco: _intended,
                                                        priority: "0",
                                                        mobileno: numberscsv[i],
                                                        sentid: "0",
                                                        sentlength: "0",
                                                        encrypted: docx.encryption == 'enable' ? true : false,
                                                        error: 'wrong masking used'
                                                    };
                                                }

                                                bulkb.insert(obj);
                                                if (i % 500 == 0) {
                                                    // console.log(i + 500 / 500, "#bulk inserted with ", i + 1, " values");
                                                    bulkb.execute();
                                                    bulkb = Bulk.collection.initializeOrderedBulkOp();
                                                }
                                                //jsonArr.push(obj);
                                            }
                                            var lim = bulkb.length;
                                            // console.log("inserting remaining values ", lim, " values");
                                            bulkb.execute().catch(reason => {
                                                // console.log("empty ops in bulksmsdynamic exec");
                                            });
                                            // console.log("inserted ", lim, " values");
                                            // console.timeEnd("insertbulk");
                                            var b = now();
                                            // console.log("insertend");

                                            for (let index = 0; index < apiarr.length; index++) {
                                                var obj = {
                                                    name: req.body.name,
                                                    masking: req.body.masking,
                                                    mobileno: apiarr[index].mobileno,
                                                    msg:apiarr[index].msg,
                                                    // msg: docx.encryption == 'enable' ? CryptoJS.AES.encrypt(req.body.msg.trim(), req.body.createdby.trim()).toString() : bulk.msg,
                                                    language: apiarr[index].language
                                                }
                                                TelenorQuickSmsApiHandlerForBulk.push(obj);






                                                // if (apiarr[index].telco == 'telenor') {
                                                //     var obj = {
                                                //         name: req.body.name,
                                                //         masking: req.body.masking,
                                                //         mobileno: apiarr[index].mobileno,
                                                //         msg:apiarr[index].msg,
                                                //         // msg: docx.encryption == 'enable' ? CryptoJS.AES.encrypt(req.body.msg.trim(), req.body.createdby.trim()).toString() : bulk.msg,
                                                //         language: apiarr[index].language
                                                //     }
                                                //     // TelenorQuickSmsApiHandlerForBulk.push(obj);
                                                // } else if (apiarr[index].telco == 'zong') {
                                                //     var obj = {
                                                //         name: req.body.name,
                                                //         masking: req.body.masking,
                                                //         mobileno: apiarr[index].mobileno,
                                                //         msg:apiarr[index].msg,
                                                //         // msg: docx.encryption == 'enable' ? CryptoJS.AES.encrypt(req.body.msg.trim(), req.body.createdby.trim()).toString() : bulk.msg,
                                                //         language: apiarr[index].language
                                                //     }
                                                //     // ZongQuickSmsApiHandlerForBulk.push(obj);
                                                // }




                                            }

                                            docx.creditsms = docx.creditsms - apiarr.length;
                                            docx.save(function (err) {
                                                if (err) {
                                                    res.json({ success: false, error: err });
                                                }
                                                res.json({
                                                    success: true,
                                                    timetaken: (b - a).toFixed(4),
                                                    records: numberscsv.length + ' found and ' + apiarr.length + ' submitted to the system.'
                                                });
                                            })
                                        }
                                    }
                                )

                            } else {
                                res.json({
                                    success: false,
                                    error: 'Not enough balance'
                                });
                            }
                        } else {
                            res.json({
                                success: false,
                                error: 'Not enough throughput.'
                            });
                        }




                    });

            } else {
                res.json({ success: false, error: 'Configuration Expired!' });
            }
        }
    );






});

router.post('/bulk/dynamic/register', (req, res) => {

    if (!isServerOpen) {
        return res.json({
            success: false,
            error: "server under maintenance, please contact support@mangotree.com"
        })
    }

    var bulk = {
        name: req.body.name,
        language: req.body.language,
        type: req.body.type,
        campaign: req.body.campaign,
        path: req.body.path,
        masking: req.body.masking,
        msg: req.body.msg,
        createdby: req.body.createdby,
        created: moment.utc().add(5, 'hours').toDate(),
        account: req.body.account,
        password: req.body.password
    }

    User.findOne(
        {
            email: req.body.createdby,
            expirybundle: {
                $gte: moment.utc().add(5, 'hours').toDate()
            }
        },
        (err, docx) => {
            if (err) {
                res.json({ success: false, error: err })
            }
            if (docx) {
                var objarr = [];

                //var bulkpath = 'dynamic.csv';
                var filepath = path.join(__dirname, '../uploads') + '/' + bulk.path;
                // path.resolve(filepath)
                csv.fromStream(request(bulk.path), {
                    delimiter: ';',
                    objectMode: true,
                    headers: true,
                    ignoreEmpty: true
                })
                    .on('data', function (data) {
                        var sometxt = bulk.msg;
                        var _message = "";

                        sometxt =
                            sometxt
                                .replace("[var1]", data.var1)
                                .replace("[var2]", data.var2)
                                .replace("[var3]", data.var3)
                                .replace("[var4]", data.var4)
                                .replace("[var5]", data.var5);

                                
                        if(docx.encryption == 'enable'){
                            if(docx.type == 'omo'){
                                _message = CryptoJS.AES.encrypt(sometxt, docx.enckey.trim()).toString();
                            }else{
                                _message = CryptoJS.AES.encrypt(sometxt, req.body.createdby.trim()).toString();
                            }
                        }else{
                            _message = sometxt;
                        }        



                        let obj = {
                            mobileno: data.mobileno,
                            msg: _message
                        };
                        objarr.push(obj);

                    })
                    .on('end', function () {

                        if (docx.smstp > 0) {
                            if (objarr.length <= docx.creditsms) {
                                //  add all the values into the database


                                Mask.findOne(
                                    {
                                        createdby: docx.email,
                                        mask: bulk.masking,
                                        status: 'activated'
                                    },
                                    (err, mask) => {
                                        if (err) {
                                            res.json({ success: false, error: err })
                                        }
                                        if (!mask) {
                                            res.json({ success: false, error: 'invalid mask' })
                                        } else {

                                            // console.time("insertbulk")
                                            var a = now();
                                            var apiarr = [];

                                            var bulkb = Bulk.collection.initializeOrderedBulkOp();
                                            for (var i = 0; i < objarr.length; i++) {
                                                //jsonArr.push({ id: i, name: name });
                                                var _intended = ''; 
                                                var obj = {};


                                                if (objarr[i].mobileno.substring(0, 4) === '9230') {
                                                    _intended = 'jazz'
                                                } else if (objarr[i].mobileno.substring(0, 4) === '9231') {
                                                    _intended = 'zong'
                                                } else if (objarr[i].mobileno.substring(0, 4) === '9232') {
                                                    _intended = 'warid'
                                                } else if (objarr[i].mobileno.substring(0, 4) === '9233') {
                                                    _intended = 'ufone'
                                                } else if (objarr[i].mobileno.substring(0, 4) === '9234') {
                                                    _intended = 'telenor'
                                                } else if (objarr[i].mobileno.substring(0, 4) === '9235') {
                                                    _intended = 'sco'
                                                } else if (objarr[i].mobileno.substring(0, 4) === '9236') {
                                                    _intended = 'pri'
                                                }

                                                

                                                if (mask.type === 'whitelisted') {
                                                    obj = {
                                                        name: bulk.name,
                                                        language: bulk.language,
                                                        type: bulk.type,
                                                        campaign: bulk.campaign,
                                                        path: bulk.path,
                                                        masking: bulk.masking,
                                                        msg: objarr[i].msg,
                                                        createdby: bulk.createdby,
                                                        created: bulk.created,
                                                        mnp: "0",
                                                        intended: _intended,
                                                        telco: _intended,
                                                        priority: "0",
                                                        mobileno: objarr[i].mobileno,
                                                        sentid: "0",
                                                        sentlength: "0",
                                                        encrypted: docx.encryption == 'enable' ? true : false
                                                    };
                                                    apiarr.push(obj);
                                                } else if (mask.type === _intended) {
                                                    obj = {
                                                        name: bulk.name,
                                                        language: bulk.language,
                                                        type: bulk.type,
                                                        campaign: bulk.campaign,
                                                        path: bulk.path,
                                                        masking: bulk.masking,
                                                        msg: objarr[i].msg,
                                                        createdby: bulk.createdby,
                                                        created: bulk.created,
                                                        mnp: "0",
                                                        intended: _intended,
                                                        telco: _intended,
                                                        priority: "0",
                                                        mobileno: objarr[i].mobileno,
                                                        sentid: "0",
                                                        sentlength: "0",
                                                        encrypted: docx.encryption == 'enable' ? true : false
                                                    };
                                                    apiarr.push(obj);
                                                } else {
                                                    obj = {
                                                        name: bulk.name,
                                                        language: bulk.language,
                                                        type: bulk.type,
                                                        campaign: bulk.campaign,
                                                        path: bulk.path,
                                                        masking: bulk.masking,
                                                        msg: objarr[i].msg,
                                                        createdby: bulk.createdby,
                                                        created: bulk.created,
                                                        mnp: "0",
                                                        intended: _intended,
                                                        telco: _intended,
                                                        priority: "0",
                                                        mobileno: objarr[i].mobileno,
                                                        sentid: "0",
                                                        sentlength: "0",
                                                        encrypted: docx.encryption == 'enable' ? true : false,
                                                        error: 'wrong masking used'
                                                    };
                                                }



                                                bulkb.insert(obj);
                                                if (i % 500 == 0) {
                                                    // console.log(i + 500 / 500, "#bulk inserted with ", i + 1, " values");
                                                    bulkb.execute();
                                                    bulkb = Bulk.collection.initializeOrderedBulkOp();
                                                }
                                                //jsonArr.push(obj);
                                            }
                                            var lim = bulkb.length;
                                            // console.log("inserting remaining values ", lim, " values");
                                            bulkb.execute().catch(reason => {
                                                // console.log("empty ops in bulksmsdynamic exec");
                                            });
                                            // console.log("inserted ", lim, " values");
                                            // console.timeEnd("insertbulk");
                                            var b = now();
                                            // console.log("insertend");

                                            for (let index = 0; index < apiarr.length; index++) {

                                                var obj = {
                                                    name: req.body.name,
                                                    masking: req.body.masking,
                                                    mobileno: apiarr[index].mobileno,
                                                    msg: apiarr[index].msg,
                                                    language: apiarr[index].language
                                                }
                                                
                                                TelenorQuickSmsApiHandlerForBulk.push(obj);



                                                // if (apiarr[index].telco == 'telenor') {
                                                //     var obj = {
                                                //         name: req.body.name,
                                                //         masking: req.body.masking,
                                                //         mobileno: apiarr[index].mobileno,
                                                //         msg: apiarr[index].msg,
                                                //         language: apiarr[index].language
                                                //     }
                                                    
                                                //     // TelenorQuickSmsApiHandlerForBulk.push(obj);
                                                // } else if (apiarr[index].telco == 'zong') {
                                                //     var obj = {
                                                //         name: req.body.name,
                                                //         masking: req.body.masking,
                                                //         mobileno: apiarr[index].mobileno,
                                                //         msg: apiarr[index].msg,
                                                //         language: apiarr[index].language
                                                //     }
                                                    
                                                //     // ZongQuickSmsApiHandlerForBulk.push(obj);
                                                // }




                                            }

                                            docx.creditsms = docx.creditsms - apiarr.length;
                                            docx.save(function (err) {
                                                if (err) {
                                                    res.json({ success: false, error: err })
                                                }

                                                res.json({
                                                    success: true,
                                                    timetaken: (b - a).toFixed(4),
                                                    records: apiarr.length + ' sent, found: ' + objarr.length
                                                });
                                            });
                                        }
                                    }
                                )
                            } else {
                                res.json({
                                    success: false,
                                    error: 'Not enough resources'
                                });
                            }
                        } else {
                            res.json({
                                success: false,
                                error: 'Not enough throuput'
                            });
                        }



                    });
            } else {
                res.json({ success: false, error: 'Configuration Expired!' })
            }
        }
    );







});

router.post('/bulk/registertest', (req, res) => {
    if (!isServerOpen) {
        return res.json({
            success: false,
            error: "server under maintenance, please contact support@mangotree.com"
        })
    }

    var numberscsv = [];
    let bulk = {
        name: req.body.name,
        language: req.body.language,
        type: req.body.type,
        campaign: req.body.campaign,
        path: req.body.path,
        masking: req.body.masking,
        msg: req.body.msg.trim(),
        createdby: req.body.createdby,
        created: moment.utc().add(5, 'hours').toDate()
    }

    User.findOne(
        {
            email: req.body.createdby,
            expirybundle: {
                $gte: moment.utc().add(5, 'hours').toDate()
            }
        },
        (err, docx) => {
            if (err) {
                res.json({ success: false, error: err });
            }
            if (docx) {

                if (docx.ufone != "") {
                    numberscsv.push(docx.ufone);
                }
                if (docx.telenor != "") {
                    numberscsv.push(docx.telenor);
                }
                if (docx.zong != "") {
                    numberscsv.push(docx.zong);
                }
                if (docx.jazz != "") {
                    numberscsv.push(docx.jazz);
                }
                if (docx.warid != "") {
                    numberscsv.push(docx.warid);
                }



                if (docx.smstp > 0) {
                    if (numberscsv.length <= docx.creditsms) {
                        // can send sms

                        Mask.findOne(
                            {
                                createdby: docx.email,
                                mask: bulk.masking,
                                status: 'activated'
                            },
                            (err, mask) => {
                                if (err) {
                                    res.json({ success: false, error: err })
                                }
                                if (!mask) {
                                    res.json({ success: false, error: 'Invalid Mask' + mask })
                                } else {
                                    // console.time("insertbulk")
                                    var a = now();

                                    var apiarr = [];
                                    var obj = {};

                                    var bulkb = Bulk.collection.initializeOrderedBulkOp();
                                    for (var i = 0; i < numberscsv.length; i++) {
                                        var _intended = ''; var _message = "";
                                        //jsonArr.push({ id: i, name: name });

                                        if (numberscsv[i].substring(0, 4) === '9230') {
                                            _intended = 'jazz'
                                        } else if (numberscsv[i].substring(0, 4) === '9231') {
                                            _intended = 'zong'
                                        } else if (numberscsv[i].substring(0, 4) === '9232') {
                                            _intended = 'warid'
                                        } else if (numberscsv[i].substring(0, 4) === '9233') {
                                            _intended = 'ufone'
                                        } else if (numberscsv[i].substring(0, 4) === '9234') {
                                            _intended = 'telenor'
                                        } else if (numberscsv[i].substring(0, 4) === '9235') {
                                            _intended = 'sco'
                                        } else if (numberscsv[i].substring(0, 4) === '9236') {
                                            _intended = 'pri'
                                        }

                                        if(docx.encryption == 'enable'){
                                            if(docx.type == 'omo'){
                                                _message = CryptoJS.AES.encrypt(req.body.msg.trim(), docx.enckey.trim()).toString();
                                            }else{
                                                _message = CryptoJS.AES.encrypt(req.body.msg.trim(), req.body.createdby.trim()).toString();
                                            }
                                        }else{
                                            _message = req.body.msg.trim();
                                        }   

                                        if (mask.type === 'whitelisted') {
                                            obj = {
                                                name: bulk.name,
                                                language: bulk.language,
                                                type: bulk.type,
                                                campaign: bulk.campaign,
                                                path: bulk.path,
                                                masking: bulk.masking,
                                                msg: _message,
                                                createdby: bulk.createdby,
                                                created: bulk.created,
                                                mnp: "0",
                                                intended: _intended,
                                                telco: _intended,
                                                priority: "0",
                                                mobileno: numberscsv[i],
                                                sentid: "0",
                                                sentlength: "0",
                                                encrypted: docx.encryption == 'enable' ? true : false
                                            };
                                            apiarr.push(obj);
                                        } else if (mask.type === _intended) {
                                            obj = {
                                                name: bulk.name,
                                                language: bulk.language,
                                                type: bulk.type,
                                                campaign: bulk.campaign,
                                                path: bulk.path,
                                                masking: bulk.masking,
                                                msg: _message,
                                                createdby: bulk.createdby,
                                                created: bulk.created,
                                                mnp: "0",
                                                intended: _intended,
                                                telco: _intended,
                                                priority: "0",
                                                mobileno: numberscsv[i],
                                                sentid: "0",
                                                sentlength: "0",
                                                encrypted: docx.encryption == 'enable' ? true : false
                                            };
                                            apiarr.push(obj);
                                        } else {
                                            obj = {
                                                name: bulk.name,
                                                language: bulk.language,
                                                type: bulk.type,
                                                campaign: bulk.campaign,
                                                path: bulk.path,
                                                masking: bulk.masking,
                                                msg: _message,
                                                createdby: bulk.createdby,
                                                created: bulk.created,
                                                mnp: "0",
                                                intended: _intended,
                                                telco: _intended,
                                                priority: "0",
                                                mobileno: numberscsv[i],
                                                sentid: "0",
                                                sentlength: "0",
                                                encrypted: docx.encryption == 'enable' ? true : false,
                                                error: 'wrong masking used'
                                            };
                                        }

                                        bulkb.insert(obj);
                                        if (i % 500 == 0) {
                                            // console.log(i + 500 / 500, "#bulk inserted with ", i + 1, " values");
                                            bulkb.execute();
                                            bulkb = Bulk.collection.initializeOrderedBulkOp();
                                        }
                                        //jsonArr.push(obj);
                                    }
                                    var lim = bulkb.length;
                                    // console.log("inserting remaining values ", lim, " values");
                                    bulkb.execute().catch(reason => {
                                        // console.log("empty ops in bulksmsdynamic exec");
                                    });
                                    // console.log("inserted ", lim, " values");
                                    // console.timeEnd("insertbulk");
                                    var b = now();
                                    // console.log("insertend");

                                    for (let index = 0; index < apiarr.length; index++) {

                                        var obj = {
                                            name: req.body.name,
                                            masking: req.body.masking,
                                            mobileno: apiarr[index].mobileno,
                                            msg: apiarr[index].msg,
                                            language: apiarr[index].language
                                        }
                                        TelenorQuickSmsApiHandlerForBulk.push(obj);



                                        // if (apiarr[index].telco == 'telenor') {
                                        //     var obj = {
                                        //         name: req.body.name,
                                        //         masking: req.body.masking,
                                        //         mobileno: apiarr[index].mobileno,
                                        //         msg: apiarr[index].msg,
                                        //         language: apiarr[index].language
                                        //     }
                                        //     // TelenorQuickSmsApiHandlerForBulk.push(obj);

                                        // } else if (apiarr[index].telco == 'zong') {
                                        //     var obj = {
                                        //         name: req.body.name,
                                        //         masking: req.body.masking,
                                        //         mobileno: apiarr[index].mobileno,
                                        //         msg: apiarr[index].msg,
                                        //         language: apiarr[index].language
                                        //     }
                                        //     // ZongQuickSmsApiHandlerForBulk.push(obj);
                                            
                                        // }



                                    }

                                    docx.creditsms = docx.creditsms - apiarr.length;
                                    docx.save(function (err) {
                                        if (err) {
                                            res.json({ success: false, error: err });
                                        }
                                        res.json({
                                            success: true,
                                            timetaken: (b - a).toFixed(4),
                                            records: numberscsv.length + ' found and ' + apiarr.length + ' submitted to the system.'
                                        });
                                    })
                                }
                            }
                        )

                    } else {
                        res.json({
                            success: false,
                            error: 'Not enough balance'
                        });
                    }
                } else {
                    res.json({
                        success: false,
                        error: 'Not enough throughput.'
                    });
                }


            } else {
                res.json({ success: false, error: 'Configuration Expired!' });
            }
        }
    );






});

router.post('/bulk/dynamic/registertest', (req, res) => {
    if (!isServerOpen) {
        return res.json({
            success: false,
            error: "server under maintenance, please contact support@mangotree.com"
        })
    }

    var numberscsv = [];
    let bulk = {
        name: req.body.name,
        language: req.body.language,
        type: req.body.type,
        campaign: req.body.campaign,
        path: req.body.path,
        masking: req.body.masking,
        msg: req.body.msg.trim(),
        createdby: req.body.createdby,
        created: moment.utc().add(5, 'hours').toDate()
    }

    User.findOne(
        {
            email: req.body.createdby,
            expirybundle: {
                $gte: moment.utc().add(5, 'hours').toDate()
            }
        },
        (err, docx) => {
            if (err) {
                res.json({ success: false, error: err });
            }
            if (docx) {

                if (docx.ufone != "") {
                    numberscsv.push(docx.ufone);
                }
                if (docx.telenor != "") {
                    numberscsv.push(docx.telenor);
                }
                if (docx.zong != "") {
                    numberscsv.push(docx.zong);
                }
                if (docx.jazz != "") {
                    numberscsv.push(docx.jazz);
                }
                if (docx.warid != "") {
                    numberscsv.push(docx.warid);
                }



                if (docx.smstp > 0) {
                    if (numberscsv.length <= docx.creditsms) {
                        // can send sms

                        Mask.findOne(
                            {
                                createdby: docx.email,
                                mask: bulk.masking,
                                status: 'activated'
                            },
                            (err, mask) => {
                                if (err) {
                                    res.json({ success: false, error: err })
                                }
                                if (!mask) {
                                    res.json({ success: false, error: 'Invalid Mask' + mask })
                                } else {
                                    // console.time("insertbulk")
                                    var a = now();

                                    var apiarr = [];
                                    var obj = {};

                                    var bulkb = Bulk.collection.initializeOrderedBulkOp();
                                    for (var i = 0; i < numberscsv.length; i++) {
                                        var _intended = ''; var _message = "";
                                        //jsonArr.push({ id: i, name: name });

                                        if (numberscsv[i].substring(0, 4) === '9230') {
                                            _intended = 'jazz'
                                        } else if (numberscsv[i].substring(0, 4) === '9231') {
                                            _intended = 'zong'
                                        } else if (numberscsv[i].substring(0, 4) === '9232') {
                                            _intended = 'warid'
                                        } else if (numberscsv[i].substring(0, 4) === '9233') {
                                            _intended = 'ufone'
                                        } else if (numberscsv[i].substring(0, 4) === '9234') {
                                            _intended = 'telenor'
                                        } else if (numberscsv[i].substring(0, 4) === '9235') {
                                            _intended = 'sco'
                                        } else if (numberscsv[i].substring(0, 4) === '9236') {
                                            _intended = 'pri'
                                        }

                                        if(docx.encryption == 'enable'){
                                            if(docx.type == 'omo'){
                                                _message = CryptoJS.AES.encrypt(req.body.msg.trim(), docx.enckey.trim()).toString();
                                            }else{
                                                _message = CryptoJS.AES.encrypt(req.body.msg.trim(), req.body.createdby.trim()).toString();
                                            }
                                        }else{
                                            _message = req.body.msg.trim();
                                        }   

                                        if (mask.type === 'whitelisted') {
                                            obj = {
                                                name: bulk.name,
                                                language: bulk.language,
                                                type: bulk.type,
                                                campaign: bulk.campaign,
                                                path: bulk.path,
                                                masking: bulk.masking,
                                                msg: _message,
                                                createdby: bulk.createdby,
                                                created: bulk.created,
                                                mnp: "0",
                                                intended: _intended,
                                                telco: _intended,
                                                priority: "0",
                                                mobileno: numberscsv[i],
                                                sentid: "0",
                                                sentlength: "0",
                                                encrypted: docx.encryption == 'enable' ? true : false
                                            };
                                            apiarr.push(obj);
                                        } else if (mask.type === _intended) {
                                            obj = {
                                                name: bulk.name,
                                                language: bulk.language,
                                                type: bulk.type,
                                                campaign: bulk.campaign,
                                                path: bulk.path,
                                                masking: bulk.masking,
                                                msg: _message,
                                                createdby: bulk.createdby,
                                                created: bulk.created,
                                                mnp: "0",
                                                intended: _intended,
                                                telco: _intended,
                                                priority: "0",
                                                mobileno: numberscsv[i],
                                                sentid: "0",
                                                sentlength: "0",
                                                encrypted: docx.encryption == 'enable' ? true : false
                                            };
                                            apiarr.push(obj);
                                        } else {
                                            obj = {
                                                name: bulk.name,
                                                language: bulk.language,
                                                type: bulk.type,
                                                campaign: bulk.campaign,
                                                path: bulk.path,
                                                masking: bulk.masking,
                                                msg: _message,
                                                createdby: bulk.createdby,
                                                created: bulk.created,
                                                mnp: "0",
                                                intended: _intended,
                                                telco: _intended,
                                                priority: "0",
                                                mobileno: numberscsv[i],
                                                sentid: "0",
                                                sentlength: "0",
                                                encrypted: docx.encryption == 'enable' ? true : false,
                                                error: 'wrong masking used'
                                            };
                                        }

                                        bulkb.insert(obj);
                                        if (i % 500 == 0) {
                                            // console.log(i + 500 / 500, "#bulk inserted with ", i + 1, " values");
                                            bulkb.execute();
                                            bulkb = Bulk.collection.initializeOrderedBulkOp();
                                        }
                                        //jsonArr.push(obj);
                                    }
                                    var lim = bulkb.length;
                                    // console.log("inserting remaining values ", lim, " values");
                                    bulkb.execute().catch(reason => {
                                        // console.log("empty ops in bulksmsdynamic exec");
                                    });
                                    // console.log("inserted ", lim, " values");
                                    // console.timeEnd("insertbulk");
                                    var b = now();
                                    // console.log("insertend");

                                    for (let index = 0; index < apiarr.length; index++) {
                                        var obj = {
                                            name: req.body.name,
                                            masking: req.body.masking,
                                            mobileno: apiarr[index].mobileno,
                                            msg: apiarr[index].msg,
                                            language: apiarr[index].language
                                        }
                                        TelenorQuickSmsApiHandlerForBulk.push(obj);



                                        // if (apiarr[index].telco == 'telenor') {
                                        //     var obj = {
                                        //         name: req.body.name,
                                        //         masking: req.body.masking,
                                        //         mobileno: apiarr[index].mobileno,
                                        //         msg: apiarr[index].msg,
                                        //         language: apiarr[index].language
                                        //     }
                                        //     // TelenorQuickSmsApiHandlerForBulk.push(obj);
                                        // } else if (apiarr[index].telco == 'zong') {
                                        //     var obj = {
                                        //         name: req.body.name,
                                        //         masking: req.body.masking,
                                        //         mobileno: apiarr[index].mobileno,
                                        //         msg: apiarr[index].msg,
                                        //         language: apiarr[index].language
                                        //     }
                                        //     // ZongQuickSmsApiHandlerForBulk.push(obj);
                                        // }



                                    }

                                    docx.creditsms = docx.creditsms - apiarr.length;
                                    docx.save(function (err) {
                                        if (err) {
                                            res.json({ success: false, error: err });
                                        }
                                        res.json({
                                            success: true,
                                            timetaken: (b - a).toFixed(4),
                                            records: numberscsv.length + ' found and ' + apiarr.length + ' submitted to the system.'
                                        });
                                    })
                                }
                            }
                        )

                    } else {
                        res.json({
                            success: false,
                            error: 'Not enough balance'
                        });
                    }
                } else {
                    res.json({
                        success: false,
                        error: 'Not enough throughput.'
                    });
                }


            } else {
                res.json({ success: false, error: 'Configuration Expired!' });
            }
        }
    );






});

router.get('/bulk/:query', (req, resp) => {
    var obj = JSON.parse(req.params.query);

    Bulk.find({
        createdby: obj.email,
        created: {
            $lte: moment.utc(obj.dateto).endOf('day').toDate(),
            $gte: moment.utc(obj.datefrom).startOf('day').toDate()
        }
    },
        (err, docs) => {
            if (err) {
                console.log(err);
            }
            //console.log(quick);

            resp.json({
                success: true,
                data: docs
            });
        });
});

router.get('/bulk/counttelco/:query', (req, resp) => {
    var obj = JSON.parse(req.params.query);

    Bulk.count({
        createdby: obj.email,
        created: {
            $lte: moment.utc(obj.dateto).endOf('day').toDate(),
            $gte: moment.utc(obj.datefrom).startOf('day').toDate()
        },
        telco: obj.telco
    },
        (err, count) => {
            if (err) {
                console.log(err);
            }
            //console.log(quick);

            resp.json({
                success: true,
                data: count
            });
        });
});

router.get('/bulk/dump/:query', (req, resp) => {
    var obj = JSON.parse(req.params.query);

    Bulk.find({
        created: {
            $lte: moment.utc(obj.dateto).endOf('day').toDate(),
            $gte: moment.utc(obj.datefrom).startOf('day').toDate()
        }
    },
        (err, docs) => {
            if (err) {
                console.log(err);
            }
            //console.log(quick);

            resp.json({
                success: true,
                data: docs
            });
        });
});

router.delete('/bulk/:name', (req, resp) => {
    let query = {
        name: req.params.name
    };
    Bulk.remove(query, (err) => {
        if (err) {
            resp.json({
                success: false,
                msg: 'The bulksms was not deleted'
            });
        } else {
            resp.json({
                success: true,
                msg: 'The bulksms was deleted'
            });
        }
    });
});


router.post('/drip/register', (req, res) => {
    if (!isServerOpen) {
        return res.json({
            success: false,
            error: "server under maintenance, please contact support@mangotree.com"
        })
    }

    User.findOne(
        {
            email: req.body.createdby,
            expirybundle: {
                $gte: moment.utc().add(5, 'hours').toDate()
            }
        },
        (err, docx) => {
            if (err) {
                res.json({ success: false, error: err })
            }
            if (docx) {
                let drip = new Drip({
                    name: req.body.name,
                    language: req.body.language,
                    masking: req.body.masking,
                    campaign: req.body.campaign,
                    path: req.body.path,
                    msg: req.body.msg.trim(),
                    datefrom: req.body.datefrom,
                    dateto: req.body.dateto,
                    frequency: req.body.frequency,
                    timespayload: req.body.timespayload,
                    createdby: req.body.createdby,
                    created: new Date().toLocaleDateString("en-US"),
                    status: 'scheduled',
                    encrypted: docx.encryption == 'enable' ? true : false
                });

                drip.save((err, drip) => {
                    if (err) {
                        res.json({
                            success: false,
                            error: err
                        })
                    } else {
                        res.json({
                            success: true
                        })
                    }
                });
            } else {
                res.json({ success: false, error: 'Configuration Expired.' })
            }
        }
    )







});

router.get('/drip/counttelco/:query', (req, resp) => {
    var obj = JSON.parse(req.params.query);

    Dripbulk.count({
        createdby: obj.email,
        created: {
            $lte: moment.utc(obj.dateto).endOf('day').toDate(),
            $gte: moment.utc(obj.datefrom).startOf('day').toDate()
        },
        telco: obj.telco
    },
        (err, count) => {
            if (err) {
                console.log(err);
            }
            //console.log(quick);

            resp.json({
                success: true,
                data: count
            });
        });
});

router.get('/drip/:email', (req, resp) => {

    // var obj = JSON.parse(req.params.query);

    //     Dripbulk.find({
    //         created: {
    //             $lte: moment.utc(obj.dateto).endOf('day').toDate(),
    //             $gte: moment.utc(obj.datefrom).startOf('day').toDate()
    //         }
    //     },
    //         (err, docs) => {
    //             if (err) {
    //                 console.log(err);
    //             }
    //             //console.log(quick);

    //             resp.json({
    //                 success: true,
    //                 data: docs
    //             });
    //         });

    let query = {
        createdby: req.params.email
    };
    Drip.find(query, (err, doc) => {
        if (err) {
            throw err;
        } else {
            //console.log(doc);
            resp.json({
                success: true,
                data: doc
            });
        }
    });
});

router.get('/drip/dump/:query', (req, resp) => {
    var obj = JSON.parse(req.params.query);

    Drip.find({
        createdmoment: {
            $lte: moment.utc(obj.dateto).endOf('day').toDate(),
            $gte: moment.utc(obj.datefrom).startOf('day').toDate()
        }
    },
        (err, docs) => {
            if (err) {
                console.log(err);
            }
            //console.log(quick);

            resp.json({
                success: true,
                data: docs
            });
        });
});

router.get('/drip/dump/:query', (req, resp) => {

    var obj = JSON.parse(req.params.query);

    Drip.find({
        created: {
            $lte: moment.utc(obj.dateto).endOf('day').toDate(),
            $gte: moment.utc(obj.datefrom).startOf('day').toDate()
        }
    },
        (err, docs) => {
            if (err) {
                console.log(err);
            }
            //console.log(quick);

            resp.json({
                success: true,
                data: docs
            });
        });
});

router.delete('/drip/:name', (req, resp) => {
    let query = {
        name: req.params.name
    };
    Drip.remove(query, (err) => {
        if (err) {
            resp.json({
                success: false,
                msg: 'The drip was not deleted'
            });
        } else {
            resp.json({
                success: true,
                msg: 'The drip was deleted'
            });
        }
    });
});



router.get('/quick/dashboard/:email', (req, resp) => {
    Quick.find({
        createdby: req.params.email
    },
        (err, docs) => {
            if (err) {
                console.log(err);
            }
            //console.log(quick);

            resp.json({
                success: true,
                data: docs
            });
        });
});

router.get('/bulk/dashboard/:email', (req, resp) => {
    Bulk.find({
        createdby: req.params.email
    },
        (err, docs) => {
            if (err) {
                console.log(err);
            }
            //console.log(quick);

            resp.json({
                success: true,
                data: docs
            });
        });
});

router.get('/drip/dashboard/:email', (req, resp) => {
    Drip.find({
        createdby: req.params.email
    },
        (err, docs) => {
            if (err) {
                console.log(err);
            }
            //console.log(quick);

            resp.json({
                success: true,
                data: docs
            });
        });
});

router.get('/digital/dashboard/:email', (req, resp) => {
    Digital.find({
        createdby: req.params.email
    },
        (err, docs) => {
            if (err) {
                console.log(err);
            }
            //console.log(quick);

            resp.json({
                success: true,
                data: docs
            });
        });
});


// ----------------------------- sent 15 entries ------------------

router.get('/sent/quick/limit/:email', (req, resp) => {
    Quick.find(
        {
            createdby: req.params.email,
            sentid: {
                $ne: "0"
            }
        },
        null,
        {
            sort: {
                created: -1
            },
            limit: 15
        },
        (err, docx) => {
            resp.json({
                success: true,
                data: docx
            })
        }
    )
});

// ----------------------------------------------------------------


router.get('/outbox/:email', (req, resp) => {
    Quick.find({
        createdby: req.params.email,
        sentid: "0",
    },
        null, {
            sort: {
                created: -1
            },
            limit: 10
        },
        (err, quickdocx) => {
            if (err) {
                resp.json({
                    success: false,
                    error: err
                });
            } else {

                Bulk.find({
                    createdby: req.params.email,
                    sentid: "0",
                },
                    null, {
                        sort: {
                            created: -1
                        },
                        limit: 10
                    },
                    (err, bulkdocx) => {
                        if (err) {
                            resp.json({
                                success: false,
                                error: err
                            });
                        } else {
                            Digital.find({

                            },
                                null, {
                                    sort: {
                                        created: -1
                                    },
                                    limit: 10
                                },
                                (err, digitaldocx) => {
                                    if (err) {
                                        resp.json({
                                            success: false,
                                            error: err
                                        });
                                    }
                                    resp.json({
                                        success: true,
                                        total: quickdocx.length + bulkdocx.length + digitaldocx.length,
                                        quickdocuments: quickdocx.length,
                                        bulkdocuments: bulkdocx.length,
                                        digitaldocuments: digitaldocx.length,
                                        quickdata: quickdocx,
                                        bulkdata: bulkdocx,
                                        digitaldata: digitaldocx
                                    });
                                }
                            );
                        }
                    }
                )
            }
        });



});

router.get('/outbox/quick/limit/:email', (req, res) => {
    Quick.find({
        createdby: req.params.email,
        sentid: "0"
    },
        null, {
            sort: {
                created: -1
            },
            limit: 5
        },
        (err, docx) => {
            if (err) {
                res.json({
                    success: false,
                    error: err
                });
            } else {
                res.json({
                    success: true,
                    data: docx
                });
            }
        }
    );
});

router.get('/outbox/bulk/limit/:email', (req, res) => {
    Bulk.find({
        createdby: req.params.email,
        sentid: "0"
    },
        null, {
            sort: {
                created: -1
            },
            limit: 5
        },
        (err, docx) => {
            if (err) {
                res.json({
                    success: false,
                    error: err
                });
            } else {
                res.json({
                    success: true,
                    data: docx
                });
            }
        }
    );
});

router.get('/outbox/digital/limit/:email', (req, res) => {
    Digital.find({
        createdby: req.params.email,
        status: "0"
    },
        null, {
            sort: {
                created: -1
            },
            limit: 5
        },
        (err, docx) => {
            if (err) {
                res.json({
                    success: false,
                    error: err
                });
            } else {
                res.json({
                    success: true,
                    data: docx
                });
            }
        }
    );
});


// ----------------------------------------------------------

router.get('/outbox/quick/count/:email', (req, resp) => {
    Quick.count({
        sentid: "0",
        priority: "0",
        createdby: req.params.email
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/bulk/count/:email', (req, resp) => {
    Bulk.count({
        sentid: "0",
        createdby: req.params.email
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/digital/count/:email', (req, resp) => {
    Digital.count({
        status: "0",
        createdby: req.params.email
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});


// -------------------------------- priority
router.get('/outbox/pri/quick/count/:email', (req, resp) => {
    Quick.count({
        sentid: "0",
        priority: "1",
        createdby: req.params.email
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/pri/quick/limit/:email', (req, res) => {
    Quick.find({
        createdby: req.params.email,
        priority: "1",
        sentid: "0"
    },
        null, {
            sort: {
                created: -1
            },
            limit: 5
        },
        (err, docx) => {
            if (err) {
                res.json({
                    success: false,
                    error: err
                });
            } else {
                res.json({
                    success: true,
                    data: docx
                });
            }
        }
    );
});


// -- segregated outbox  -------------------------------

router.get('/outbox/quick/jazz/count/:email', (req, resp) => {
    Quick.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "0",
        telco: 'jazz'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/quick/zong/count/:email', (req, resp) => {
    Quick.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "0",
        telco: 'zong'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/quick/warid/count/:email', (req, resp) => {
    Quick.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "0",
        telco: 'warid'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/quick/ufone/count/:email', (req, resp) => {
    Quick.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "0",
        telco: 'ufone'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/quick/telenor/count/:email', (req, resp) => {
    Quick.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "0",
        telco: 'telenor'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/bulk/jazz/count/:email', (req, resp) => {
    Bulk.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "0",
        telco: 'jazz'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/bulk/zong/count/:email', (req, resp) => {
    Bulk.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "0",
        telco: 'zong'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/bulk/warid/count/:email', (req, resp) => {
    Bulk.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "0",
        telco: 'warid'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/bulk/ufone/count/:email', (req, resp) => {
    Bulk.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "0",
        telco: 'ufone'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/bulk/telenor/count/:email', (req, resp) => {
    Bulk.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "0",
        telco: 'telenor'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

// -- segregated outbox priority  -------------------------------

router.get('/outbox/pri/quick/jazz/count/:email', (req, resp) => {
    Quick.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "1",
        telco: 'jazz'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/pri/quick/zong/count/:email', (req, resp) => {
    Quick.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "1",
        telco: 'zong'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/pri/quick/warid/count/:email', (req, resp) => {
    Quick.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "1",
        telco: 'warid'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/pri/quick/ufone/count/:email', (req, resp) => {
    Quick.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "1",
        telco: 'ufone'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/pri/quick/telenor/count/:email', (req, resp) => {
    Quick.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "1",
        telco: 'telenor'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/pri/bulk/jazz/count/:email', (req, resp) => {
    Bulk.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "1",
        telco: 'jazz'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/pri/bulk/zong/count/:email', (req, resp) => {
    Bulk.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "1",
        telco: 'zong'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/pri/bulk/warid/count/:email', (req, resp) => {
    Bulk.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "1",
        telco: 'warid'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/pri/bulk/ufone/count/:email', (req, resp) => {
    Bulk.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "1",
        telco: 'ufone'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/outbox/pri/bulk/telenor/count/:email', (req, resp) => {
    Bulk.count({
        sentid: "0",
        createdby: req.params.email,
        priority: "1",
        telco: 'telenor'
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});


//  -------------------------------------- total sent
router.get('/total/quick/count/:email', (req, resp) => {
    Quick.count({
        createdby: req.params.email
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/total/bulk/count/:email', (req, resp) => {
    Bulk.count({
        createdby: req.params.email
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/total/digital/count/:email', (req, resp) => {
    Digital.count({
        createdby: req.params.email
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});

router.get('/total/drip/count/:email', (req, resp) => {
    Drip.count({
        createdby: req.params.email
    }, function (err, docs) {
        if (err) {
            resp.json({
                success: false,
                err: err
            });
        } else {
            resp.json({
                success: true,
                count: docs
            });
        }
    });
});


// --------------------------------------------------
// API

router.post('/api/static', (req, res) => {

    if (!isServerOpen) {
        return res.json({
            success: false,
            error: "server under maintenance, please contact support@mangotree.com"
        })
    }

    if (!req.headers.apikey || !req.headers.email || !req.headers.password) {
        res.json({
            success: false,
            error: 'Invalid headers for authentication'
        });
    } else {
        let _id = req.headers.apikey;
        let email = req.headers.email;
        let password = req.headers.password;
        User.findOne({
            _id: _id,
            email: email,
            isactivated:true,
            issuspended:false,
            expirybundle: {
                $gte: moment.utc().add(5, 'hours').toDate()
            }
        },
            (err, doc) => {
                if (err) {
                    res.json({
                        success: false,
                        error: err
                    });
                } else {
                    if (doc != null) {
                        User.comparePassword(password, doc.password, (err, ismatch) => {
                            if (err) {
                                res.json({
                                    success: false,
                                    error: err
                                });
                            }
                            if (!ismatch) {
                                res.json({
                                    success: false,
                                    error: "invalid credentials."
                                });
                            } else {

                                var name = req.body.name;
                                var language = req.body.language;
                                var masking = req.body.masking;
                                var mobiles = req.body.mobilenos;
                                var mobarr = mobiles.trim().split(',');
                                var uniquemobarr = Array.from(new Set(mobarr));
                                var mobilenos = uniquemobarr;

                                //console.log(mobilenos);

                                var msg = req.body.msg;

                                var _message = "";

                                if(doc.encryption == 'enable'){
                                    if(doc.type == 'omo'){
                                        _message = CryptoJS.AES.encrypt(req.body.msg.trim(), doc.enckey.trim()).toString();
                                    }else{
                                        _message = CryptoJS.AES.encrypt(req.body.msg.trim(), req.body.createdby.trim()).toString();
                                    }
                                }else{
                                    _message = req.body.msg.trim();
                                }   

                                msg = _message;

                                var msgchars = req.body.msgchars;
                                var noofmsgs = req.body.noofmsgs;
                                var preference = req.body.preference;
                                var priority = req.body.priority;
                                var createdby = email;
                                var created = moment.utc().add(5, 'hours').toDate();

                                var jsonArr = [];

                                Mask.findOne(
                                    {
                                        createdby: email,
                                        mask: masking,
                                        status: 'activated'
                                    },
                                    (err, mask) => {
                                        if (err) {
                                            res.json({
                                                success: false,
                                                error: err
                                            });
                                        }
                                        if (mask) {
                                            if (mobilenos.length <= doc.creditsms) {


                                                console.time("insertbulk")
                                                var everything = [];

                                                var sendtoapiarr = [];

                                                var bulk = Quick.collection.initializeOrderedBulkOp();
                                                for (var i = 0; i < mobilenos.length; i++) {
                                                    var _intended = '';
                                                    var obj = {};

                                                    jsonArr.push({
                                                        id: i,
                                                        name: name
                                                    });

                                                    if (mobilenos[i].substring(0, 4) === '9230') {
                                                        _intended = 'jazz'
                                                    } else if (mobilenos[i].substring(0, 4) === '9231') {
                                                        _intended = 'zong'
                                                    } else if (mobilenos[i].substring(0, 4) === '9232') {
                                                        _intended = 'warid'
                                                    } else if (mobilenos[i].substring(0, 4) === '9233') {
                                                        _intended = 'ufone'
                                                    } else if (mobilenos[i].substring(0, 4) === '9234') {
                                                        _intended = 'telenor'
                                                    } else if (mobilenos[i].substring(0, 4) === '9235') {
                                                        _intended = 'sco'
                                                    } else if (mobilenos[i].substring(0, 4) == '9236') {
                                                        _intended = 'pri'
                                                    }

                                                    if (mask.type === 'whitelisted') {
                                                        // the mask is correct
                                                        obj = {
                                                            name: name,
                                                            language: language,
                                                            masking: masking,
                                                            mobileno: mobilenos[i],
                                                            msg: msg,
                                                            msgchars: msgchars,
                                                            noofmsgs: noofmsgs,
                                                            preference: preference,
                                                            createdby: createdby,
                                                            created: created,
                                                            mnp: '0',
                                                            intended: _intended,
                                                            telco: _intended,
                                                            priority: priority,
                                                            sentid: "0",
                                                            sentlength: "0",
                                                            encrypted: doc.encryption == 'enable' ? true : false
                                                        };
                                                        sendtoapiarr.push(obj);
                                                    } else if (mask.type === _intended) {
                                                        // the mask is correct
                                                        obj = {
                                                            name: name,
                                                            language: language,
                                                            masking: masking,
                                                            mobileno: mobilenos[i],
                                                            msg: msg,
                                                            msgchars: msgchars,
                                                            noofmsgs: noofmsgs,
                                                            preference: preference,
                                                            createdby: createdby,
                                                            created: created,
                                                            mnp: '0',
                                                            intended: _intended,
                                                            telco: _intended,
                                                            priority: priority,
                                                            sentid: "0",
                                                            sentlength: "0",
                                                            encrypted: doc.encryption == 'enable' ? true : false
                                                        };

                                                        sendtoapiarr.push(obj);
                                                    } else {
                                                        // the mask is incorrect
                                                        obj = {
                                                            name: name,
                                                            language: language,
                                                            masking: masking,
                                                            mobileno: mobilenos[i],
                                                            msg: msg,
                                                            msgchars: msgchars,
                                                            noofmsgs: noofmsgs,
                                                            preference: preference,
                                                            createdby: createdby,
                                                            created: created,
                                                            mnp: '0',
                                                            intended: _intended,
                                                            telco: _intended,
                                                            priority: priority,
                                                            sentid: "0",
                                                            sentlength: "0",
                                                            encrypted: doc.encryption == 'enable' ? true : false,
                                                            error: 'wrong masking used'
                                                        };
                                                    }


                                                    bulk.insert(obj);
                                                    everything.push(obj);

                                                    if (i % 500 == 0) {
                                                        // console.log(i + 500 / 500, "#bulk inserted with ", i + 1, " values");
                                                        bulk.execute();
                                                        bulk = Quick.collection.initializeOrderedBulkOp();
                                                    }
                                                }
                                                var lim = bulk.length;
                                                // console.log("inserting remaining values ", lim, " values");

                                                bulk.execute().catch(any => {
                                                    // console.log('empty ops in quick remaining bucket');
                                                });

                                                // console.log("inserted ", lim, " values");
                                                // console.timeEnd("insertbulk");
                                                // console.log("insertend");


                                                for (let index = 0; index < sendtoapiarr.length; index++) {

                                                    var obj = {
                                                        name: req.body.name,
                                                        masking: req.body.masking,
                                                        number: sendtoapiarr[index].mobileno,
                                                        msg: req.body.msg,
                                                        language: sendtoapiarr[index].language
                                                    }
                                                    TelenorQuickSmsApiHandler.push(obj);




                                                    // if (sendtoapiarr[index].telco == 'telenor') {
                                                    //     var obj = {
                                                    //         name: req.body.name,
                                                    //         masking: req.body.masking,
                                                    //         number: sendtoapiarr[index].mobileno,
                                                    //         msg: req.body.msg,
                                                    //         language: sendtoapiarr[index].language,
                                                    //         account: '923170000424',
                                                    //         password: '123'
                                                    //     }
                                                    //     // TelenorQuickSmsApiHandler.push(obj);
                                                    // } else if (sendtoapiarr[index].telco == 'zong') {
                                                    //     var obj = {
                                                    //         name: req.body.name,
                                                    //         masking: req.body.masking,
                                                    //         number: sendtoapiarr[index].mobileno,
                                                    //         msg: req.body.msg,
                                                    //         language: sendtoapiarr[index].language,
                                                    //         account: '923170000424',
                                                    //         password: '123'
                                                    //     }
                                                    //     // ZongQuickSmsApiHandler.push(obj);
                                                    // }




                                                }


                                                doc.creditsms = doc.creditsms - sendtoapiarr.length;
                                                doc.save(function (err) {
                                                    if (err) {
                                                        res.json({
                                                            success: false,
                                                            error: err
                                                        });
                                                    } else {
                                                        res.json({
                                                            success: true,
                                                            message: 'Total Found: ' + mobilenos.length + ' ,' + sendtoapiarr.length + ' messages submitted to the system.'
                                                        });
                                                    }
                                                });
                                            } else {
                                                res.json({
                                                    success: false,
                                                    error: "Not enough resources"
                                                });
                                            }
                                        } else {
                                            res.json({
                                                success: false,
                                                error: "invalid masking"
                                            });
                                        }
                                    }
                                )





                            }
                        });
                    } else {
                        res.json({
                            success: false,
                            error: "user not found/configuration expired"
                        });
                    }
                }
            }
        );
    }

});


// -----------------------------------------------------
router.get('/enc', (req, res) => {
    // Encrypt
    //var ciphertext = CryptoJS.AES.encrypt('U2FsdGVkX19nThHArP60KdgT0MYCmf4Kx/O95PNR1/NPY0UBE0qorGZrVLQnJ+HXxwhHR6...', 'a@a.com');

    // Decrypt
    var bytes = CryptoJS.AES.decrypt('U2FsdGVkX1+22scdPaZqa42X/QEVMK0ChS+9qemeqrdtpo0BRnzMH7+6nRXPsCqCdI3DXOgGf1tpUxWJNNJwRQ==', 'a@a.com');
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);

    console.log(plaintext);
    res.json({
        cipher: "",
        bytes: bytes + "",
        data: plaintext
    })
});

router.get('/test', (req, res) => {

    var query = {
        'timespayload.status': '',
        status: 'scheduled'
    }

    var objarr = [];

    Drip.find(query, (err, doc) => {
        if (err) {
            console.log(err);
            // res.send(err);
        } else {

            var masterarr = doc;

            masterarr.forEach(function (element) {
                // check if the date of the drip is between the date range
                var fromdateserver = moment(element.datefrom).format('YYYY-MM-DD');
                var todateserver = moment(element.dateto).format('YYYY-MM-DD');
                var currentdate = moment().format('YYYY-MM-DD');

                var test = moment(currentdate).isBetween(fromdateserver, todateserver, null, []);

                //console.log(test);
                if (test) {
                    console.log(element.name + ' is okay to be processed');

                    element.timespayload.forEach(function (payload) {
                        if (payload.status == "") {

                            var st = moment().format('hh:mm a');
                            var startTime = moment(st, 'hh:mm a');
                            var endTime = moment(payload.time, 'hh:mm a');
                            var minutes = endTime.diff(startTime, 'minutes');

                            var numberscsv = [];
                            console.log(payload.time + ' difference is ' + minutes + ' minutes');

                            if (minutes <= 0) {

                                console.log('attempting bulk for ' + payload.time);
                                // it is time to send the bulk
                                filepath = path.join(__dirname, '../uploads') + '/' + element.path;
                                csv.fromPath(path.resolve(filepath), {
                                    delimiter: ';',
                                    objectMode: true,
                                    headers: false
                                })
                                    .on('data', function (data) {
                                        numberscsv.push(data[0]);
                                        //console.log(data);  
                                    })
                                    .on('end', function () {
                                        var numbers = numberscsv.toString();
                                        // send a bulk request
                                        var url = 'http://cbs.zong.com.pk/ReachCWSv2/CorporateSmsV3.asmx?wsdl';

                                        console.log(payload.time + '-> hitting bulk api for numbers ' + numbers);

                                        var bulksms = {
                                            'objBulkSms': {
                                                'LoginId': element.account,
                                                'LoginPassword': element.password,
                                                'CampaignName': element.name,
                                                'Mask': element.masking,
                                                'Message': element.msg,
                                                'UniCode': '0',
                                                'NumberCsv': numbers,
                                                'CampaignDate': moment().format('MM/DD/YYYY hh:mm:ss a'),
                                                'ShortCodePrefered': 'n'
                                            }
                                        }
                                        soap.createClient(url, function (err, client) {
                                            client.BulkSmsv3(bulksms, function (err, result) {
                                                if (err) {
                                                    console.log(err, ' in drip');
                                                } else {
                                                    var str = result.BulkSmsv3Result;
                                                    if (str.indexOf("Successfully") > 0) {
                                                        console.log(str);

                                                        // update status of drip where payload.time
                                                        Drip.updateOne({
                                                            name: element.name,
                                                            'timespayload.time': payload.time
                                                        }, {
                                                                $set: {
                                                                    'timespayload.$.status': 'done'
                                                                }
                                                            },
                                                            (err, raw) => {
                                                                if (err) {
                                                                    console.log(err)
                                                                } else {
                                                                    console.log('updated status for ' + payload.time);
                                                                }
                                                            }
                                                        )

                                                    } else {
                                                        console.log(str);
                                                    }
                                                }
                                            })
                                        });
                                    });
                            }
                        }
                    });
                } else {
                    console.log(element.name + " is expired.");
                }
            }, this);

            //res.send(doc);
        }
    });













});


router.get('/account/summary', (req, res) => {
    
    var url = 'https://cbs.zong.com.pk/reachcwsv2/corporatesms.svc?wsdl';
    var bodyJSON = JSON.parse(JSON.stringify(req.body));

    // var loginId = bodyJSON.loginId;
    // var loginPassword = bodyJSON.loginPassword;

    var loginId = '923170000424';
    var loginPassword = '123';

    // Account Summary
    var accountsummaryargs = {
        'obj_GetAccountSummary': {
            'loginId': loginId,
            'loginPassword': loginPassword
        }
    }
    soap.createClient(url, function (err, client) {
        client.GetAccountSummary(accountsummaryargs, function (err, result) {
            if (err) {
                res.json({
                    success: false,
                    errormessage: err,
                    error:err
                });
            } else {


                var data = JSON.parse(JSON.stringify(result.GetAccountSummaryResult.CounterResponse));

                var datas = JSON.stringify(data);

                if (datas.indexOf("Invalid") == -1) {
                    res.json({
                        success: true,
                        data: data
                    });
                } else {
                    res.json({
                        success: false,
                        data: data.ErrorMessage,
                        error:data.ErrorMessage
                    });
                }
                //console.log(data.indexOf("Invalid"));

                //console.log(data.ErrorMessage);
                // console.log(data.indexOf("Invalid"));
                // if(data.ErrorMessage.indexOf("Invalid")==0){
                //     // invalid
                //     res.json({
                //         success:false,
                //         data:data.ErrorMessage
                //     });
                // }else{
                //     res.json({
                //         success:true,
                //         data:data
                //     });
                // }



            }
        })
    });
});


router.get('/inbox', (req, res) => {
    var url = 'http://cbs.zong.com.pk/reachcwsv2/corporatesms.svc?wsdl';
    var loginId = '923170000424';
    var loginPassword = '123';

    // Account Summary
    var getinboxargs = {
        'objInbox': {
            'loginId': loginId,
            'loginPassword': loginPassword
        }
    }
    soap.createClient(url, function (err, client) {
        client.GetInbox(getinboxargs, function (err, result) {
            if (err) {
                res.json({
                    success: false,
                    errormessage: err
                });
            } else {
                var data = result;
                res.send(data);


                // var data = JSON.parse(JSON.stringify(result.GetAccountSummaryResult.CounterResponse)); 


                // res.json({
                //     success:true,
                //     data:data
                // });

            }
        })
    });
});

router.get('/reports', (req, res) => {
    var url = 'http://cbs.zong.com.pk/reachcwsv2/corporatesms.svc?wsdl';
    var loginId = '923170000424';
    var loginPassword = '123';
    var from = '07/10/2018';
    var to = '07/15/2018';

    // Account Summary
    var getreportsargs = {
        'objReport': {
            'loginId': loginId,
            'loginPassword': loginPassword,
            'datefrom': from,
            'dateto': to
        }
    }
    soap.createClient(url, function (err, client) {
        client.GetReports(getreportsargs, function (err, result) {
            if (err) {
                res.json({
                    success: false,
                    errormessage: err
                });
            } else {
                var data = result;
                res.send(data.GetReportsResult.reportResponse);


                // var data = JSON.parse(JSON.stringify(result.GetAccountSummaryResult.CounterResponse)); 


                // res.json({
                //     success:true,
                //     data:data
                // });

            }
        })
    });
});


router.get('/campaigns', (req, res) => {
    var url = 'http://cbs.zong.com.pk/reachcwsv2/corporatesms.svc?wsdl';
    var loginId = '923170000424';
    var loginPassword = '123';

    // Account Summary
    var getcampaignargs = {
        'objCampaigns': {
            'loginId': loginId,
            'loginPassword': loginPassword
        }
    }
    soap.createClient(url, function (err, client) {
        client.GetCampaigns(getcampaignargs, function (err, result) {
            if (err) {
                res.json({
                    success: false,
                    errormessage: err
                });
            } else {
                var data = result;
                res.send(data);


                // var data = JSON.parse(JSON.stringify(result.GetAccountSummaryResult.CounterResponse)); 


                // res.json({
                //     success:true,
                //     data:data
                // });

            }
        })
    });
});


//export
module.exports = router;