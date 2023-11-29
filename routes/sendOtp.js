const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
var otpGenerator = require('otp-generator');
const otpSchema = require('../models/otpData')
const userModel=require('../models/userData')


router.post('/forgotPass', async (req, res) => {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
        res.json({ user: "notfound", msg: 'Email not resistered, please sign up' });
    }
    else {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        });

        var otp = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
        await otpSchema.deleteMany({ email: req.body.email })
        await otpSchema.create({
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
                res.json({ success: false, msg: "Error sending email", error })
            } else {
                res.json({ success: true, msg: "otp sent", info })
            }
        });
    }
})

module.exports = router