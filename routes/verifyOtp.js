const express = require('express');
const router = express.Router();
const otpModel = require('../models/otpData')
const userModel = require('../models/userData')
const bcrypt = require('bcryptjs');
const saltRounds = 10

router.post('/verifyOtp', async (req, res) => {
    var user = await otpModel.findOne({ email: req.body.email })
    console.log(user.otp)
    console.log(req.body.otp)
    console.log(req.body.email)
    console.log(req.body.password)
    if (user.otp === req.body.otp) {
        const salt = await bcrypt.genSalt(saltRounds);
        const secPass = await bcrypt.hash(req.body.password, salt);
        console.log(secPass)
        const uu = await userModel.updateOne({ email: req.body.email }, { $set: { password: secPass } })
        if (uu) {
            otpModel.deleteMany({ email: req.body.email })
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