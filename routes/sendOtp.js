const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
var otpGenerator = require('otp-generator');
const otpSchema = require('../models/otpData')


router.post('/forgotPass', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "wefarmsaathi.gmail.com",
            pass: 'nfpk wqqo xdqt iigp'
        }
    });

    var otp = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
    otpSchema.deleteMany({ email: req.body.email })
    otpSchema.create({
        email: req.body.email,
        otp: otp,
    })

    var mailOptions = {
        from: "wefarmsaathi@gmail.com",
        to: req.body.email,
        subject: 'reset password',
        text: `Your otp is ${otp}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.json({ success: false, msg: "Error sending email" })
        } else {
            res.json({ success: true, msg: "otp sent" })
        }
    });
})

module.exports = router