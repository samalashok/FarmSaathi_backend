const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const router = express.Router();
const otpSchema = require('../models/otpData')
const userSchema = require('../models/userData')


router.post('/verifyOtp', (req, res) => {
    var user = otpSchema.find({ email: req.body.email })
    if (user.otp === req.body.otp) {
        otpSchema.deleteMany({ email: req.body.email })
        var uu = userSchema.updateOne({ email: req.body.email }, { $set: { password: req.body.password } })
        if (uu)
            res.json({ success: true })
        else
            res.json({ success: false })
    }
    else {
        res.json({ success: false })
    }
})

module.exports = router