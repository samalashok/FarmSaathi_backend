const mongoose = require('mongoose')
const orderSchema= mongoose.Schema({
    email:String,
    order_details:Object,
    cart_details:Object,
    address_details:Object,
    status:String,
    date:{type:Date, default:Date.now}
})

module.exports = mongoose.model('orderDetail',orderSchema)