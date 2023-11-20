const mongoose=require('mongoose');
const addressShcema=mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    zipcode:String,
    city:String,
    state:String,
    loc:String,
    address1:String,
    address2:String,
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('addressData',addressShcema)