const mongoose = require('mongoose')
const otpSchema= mongoose.Schema({
    email:String,
    otp:String,
    date:{type:Date, default:Date.now}
})

module.exports = mongoose.model('otpData',otpSchema)