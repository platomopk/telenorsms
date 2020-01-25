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

var morgan = require('morgan')


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
mongoose.connect(config.database, { keepAlive: true, keepAliveInitialDelay: 300000 });

//check if connected
mongoose.connection.on('connected', () => {
    console.log("Connected to DB " + config.database);
});

//check if db error
mongoose.connection.on('error', (err) => {
    console.log("DB error " + err);
});
//-----------------------------------------------------------------------

//start express 
const app = express();

var upload = require('express-fileupload');

app.use(upload());
app.use(compression());
app.use(morgan('combined'));

//the router file for users
const users = require('./routes/users');

//port
const port = process.env.PORT || 3000;

app.use(cors({ credentials: true, origin: '*' }));


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

//static folder
// app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static(path.join(__dirname,'public/assets'),{maxAge:'1d'}));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1d' }));

//get form data incoming request
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.locals.isServerOpen = false;

require('./config/passport')(passport);

//user routes file
app.use('/users', users);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

//create server
app.listen(port, () => {
    console.log("Server started on port " + port);
})