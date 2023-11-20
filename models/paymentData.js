const mongoose = require('mongoose')
const paymentSchema = mongoose.Schema({
    email:String,
    order_id: String,
    payment_id: String,
    amount:Number, 
    signature: String,
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model('paymentDetail', paymentSchema)