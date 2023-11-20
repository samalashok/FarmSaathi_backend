const mongoose = require('mongoose')
const cartSchema= mongoose.Schema({
    email:String,
    data:Object,
    date:{type:Date, default:Date.now}
})

module.exports = mongoose.model('cartData',cartSchema)