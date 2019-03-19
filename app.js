//------------------------------------- require -------------------------
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const fs = require('fs');
const cron = require('node-cron');

const Drip = require('./models/drip');


var csv = require('fast-csv');
const Moment = require('moment');
// var momentrrange =  require('moment-range');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
var soap = require('soap');
var compression = require('compression');

//-----------------------------------------------------------------------

//---------------------------- mongoose ---------------------------------
//mongodb connection
mongoose.connect(config.database);

//check if connected
mongoose.connection.on('connected',()=>{
    console.log("Connected to DB " + config.database);
});

//check if db error
mongoose.connection.on('error',(err)=>{
    console.log("DB error " + err);
});
//-----------------------------------------------------------------------


//start express 
const app = express();

var upload = require('express-fileupload');

app.use(upload());
app.use(compression());

//the router file for users
const users = require('./routes/users');

//the router file for masks
const masks = require('./routes/masks');

//the router file for bundles
const bundles = require('./routes/bundles');

//the router file for bundles
const issues = require('./routes/issues');

//the router file for bundles
const contacts = require('./routes/contacts');

const notifications = require('./routes/notifications');


const messaging = require('./routes/messaging');
const hybrid = require('./routes/hybrid');

//port
const port = process.env.PORT || 3000;

// const port = 3000;

//middlewares
//any domain can access our server 
// app.use(cors({credentials: true, origin: 'http://localhost:4200'}));

 app.use(cors({credentials: true, origin: '*'}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
  });

//static folder
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'public/assets'),{maxAge:'1d'}));

//get form data incoming request
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//user routes file
app.use('/users', users); 

//user routes file
app.use('/contacts', contacts); 

// masks routes file
app.use('/masks', masks); 

// masks routes file
app.use('/bundles', bundles); 

// masks routes file
app.use('/issue', issues); 

// masks routes file
app.use('/notifications', notifications); 

app.use('/messaging', messaging); 

app.use('/hybrid', hybrid); 


//index route
// app.get('/',(req,res) => {
//  res.send("MangoTree");
// })

// app.use(function(req, res) {
//     res.sendFile(path.join(__dirname, '/public', 'index.html'));
// });

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
    // res.sendFile(path.join(__dirname + '/dist/index.html'));
});

//cron jobs for drip
// cron.schedule("* * * * *", function(){
//     var query = {
//         'timespayload.status' : '',
//         status : 'scheduled'
//     }
//     var objarr = [];
//     Drip.find(query,(err,doc)=>{
//         if(err){
//             console.log(err);
//            // res.send(err);
//         }else{
            
//             var masterarr = doc;

//             masterarr.forEach(function(element) {
//                 // check if the date of the drip is between the date range
//                 var fromdateserver = moment(element.datefrom).format('YYYY-MM-DD');
//                 var todateserver = moment(element.dateto).format('YYYY-MM-DD');
//                 var currentdate = moment().format('YYYY-MM-DD');

//                 var test = moment(currentdate).isBetween(fromdateserver, todateserver,null,[]);
                
//                 //console.log(test);
//                 if(test){
//                     console.log(element.name+' is okay to be processed');

//                     element.timespayload.forEach(function(payload){
//                         if(payload.status == ""){
                            
//                             var st =moment().format('hh:mm a');
//                             var startTime = moment(st, 'hh:mm a');
//                             var endTime = moment(payload.time, 'hh:mm a');
//                             var minutes = endTime.diff(startTime, 'minutes');

//                             var numberscsv =[];
//                             console.log(payload.time+' difference is '+minutes+' minutes');

//                             if(minutes == 0){

//                                 console.log('attempting bulk for '+payload.time);
//                                 // it is time to send the bulk
//                                 filepath = path.join(__dirname,'./uploads')+'/'+element.path;
//                                 csv.fromPath(path.resolve(filepath),{delimiter:';',objectMode:true,headers:false})
//                                 .on('data',function(data){
//                                     numberscsv.push(data[0]);
//                                     //console.log(data);  
//                                 })
//                                 .on('end',function(){
//                                     var numbers = numberscsv.toString();
//                                     // send a bulk request
//                                     var url ='http://cbs.zong.com.pk/ReachCWSv2/CorporateSmsV3.asmx?wsdl';
                                    
//                                     console.log(payload.time+'-> hitting bulk api for numbers '+numbers);

//                                     var bulksms =
//                                     {
//                                         'objBulkSms':
//                                             {
//                                                 'LoginId':element.account,
//                                                 'LoginPassword':element.password,
//                                                 'CampaignName':element.name,
//                                                 'Mask':element.masking,
//                                                 'Message':element.msg,
//                                                 'UniCode':'0',
//                                                 'NumberCsv':numbers,
//                                                 'CampaignDate':moment().format('MM/DD/YYYY hh:mm:ss a'),
//                                                 'ShortCodePrefered':'n'
//                                             }
//                                     }
//                                     soap.createClient(url,function(err,client){
//                                         client.BulkSmsv3(bulksms,function(err,result){
//                                             if(err){
//                                                 console.log(err,' in drip');
//                                             }else{
//                                                 var str = result.BulkSmsv3Result;
//                                                 if(str.indexOf("Successfully")>0){
//                                                     console.log(str);
                                                    
//                                                     // update status of drip where payload.time

//                                                     // Drip.updateOne(
//                                                     //     { name:element.name, 'timespayload.time':payload.time},
//                                                     //     { $set: {'timespayload.$.status':'done'} },
//                                                     //     (err,raw)=>{
//                                                     //         if(err){
//                                                     //             console.log(err)
//                                                     //         }else{
//                                                     //             console.log('updated status for '+payload.time);
//                                                     //         }
//                                                     //     }
//                                                     // )

//                                                 }else{
//                                                     console.log(str);
//                                                 }                    
//                                             }
//                                         })
//                                     });

//                                 });
//                             }
//                         }   
//                     });
//                 }else{
//                     // console.log(element.name+" is expired.");
//                 }
//             }, this);
//             //res.send(doc);
//         }
//     });
//     //console.log("Running every minute", moment().format("hh:mm:ss a"));
// });


//create server
app.listen(port,()=>{
    console.log("Server started on port "+port);
})
