const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const bcrypt = require("bcryptjs");
const Moment = require("moment");
const MomentRange = require("moment-range");
const moment = MomentRange.extendMoment(Moment);
const nodemailer = require("nodemailer");

var CryptoJS = require("crypto-js");


//register
router.post("/register", (req, res) => {
    let newUser = new User({
        company: req.body.company,
        enckey: req.body.enckey,
        firstname: req.body.fname,
        lastname: req.body.lname,
        salesemail: req.body.salesemail,
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        rights: req.body.rights,
        isparent: req.body.isparent,
        isdelegate: req.body.isdelegate,
        parent: req.body.parent,
        parents: req.body.parents,
        type: req.body.type,
        creditsms: req.body.creditsms,
        creditwhatsapp: req.body.creditwhatsapp,
        issuspended: req.body.issuspended,
        expirybundle: req.body.expirybundle,
        smstp: req.body.smstp,
        watp: req.body.watp,
        isactivated: req.body.isactivated,
        encryption: req.body.encryption,
        created: moment
            .utc()
            .add(5, "hours")
            .toDate()
    });

    //normal user addition without sales for telenor sample
    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({
                success: false,
                error: "Failed to register user.\n\n" + err
            });
        } else {
            res.json({ success: true, msg: "User registered" });
        }
    });

});


//authenticate
router.post("/authenticate", (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if (err) {
            throw err;
        }

        if (!user) {
            return res.json({ success: false, msg: "user not found" });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                //create token
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 86400 //1 day in seconds
                });

                res.json({
                    success: true,
                    token: "bearer " + token,
                    user: {
                        id: user._id,
                        fullname: user.fullname,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        company: user.company,
                        email: user.email,
                        rights: user.rights,
                        type: user.type,
                        parent: user.parent,
                        delegate: user.isdelegate,
                        parents: user.parents,
                        salesemail: user.salesemail,
                        enckey: user.enckey
                    },
                    activated: user.isactivated,
                    suspended: user.issuspended
                });
            } else {
                return res.json({ success: false, msg: "wrong password" });
            }
        });
    });
});

//export
module.exports = router;