const dotenv = require('dotenv')
dotenv.config()
const express = require('express');
const router = express.Router();
const otpSchema = require('../models/otpData')
const userSchema = require('../models/userData')
const bcrypt = require('bcryptjs');
const saltRounds = 10

router.post('/verifyOtp', async (req, res) => {
    var user = await otpSchema.find({ email: req.body.email })
    if (user.otp === req.body.otp) {

        const salt = bcrypt.genSalt(saltRounds);
        const secPass = bcrypt.hash(req.body.password, salt);
        var uu = await userSchema.updateOne({ email: req.body.email }, { $set: { password: secPass } })
        if (uu) {
            await otpSchema.deleteMany({ email: req.body.email })
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