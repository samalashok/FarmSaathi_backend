const mongoose= require('mongoose');
const productSchema=mongoose.Schema({
    name:String,
    desc:String,
    price:Number,
    brand:String,
    img:String
})

module.exports = mongoose.model('product', productSchema);
