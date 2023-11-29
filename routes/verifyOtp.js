const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const router = express.Router();
const otpSchema = require('../models/otpData')
const userSchema = require('../models/userData')
const bcrypt = require('bcryptjs');
const saltRounds = 10

router.post('/verifyOtp', (req, res) => {
    var user = otpSchema.find({ email: req.body.email })
    if (user.otp === req.body.otp) {

        const salt = bcrypt.genSalt(saltRounds);
        const secPass = bcrypt.hash(req.body.password, salt);
        var uu = userSchema.updateOne({ email: req.body.email }, { $set: { password: secPass } })
        if (uu) {
            otpSchema.deleteMany({ email: req.body.email })
            res.json({ success: true, msg: 'password changed' })
        }
        else
            res.json({ success: false, msg: "something went wrong" })
    }
    else {
        res.json({ success: false, msg: "otp did not match" })
    }
})

module.exports = router