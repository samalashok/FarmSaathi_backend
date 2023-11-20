const mongoose= require('mongoose');

const imgSchema=mongoose.Schema({
    link:String
})

module.exports = mongoose.model('image', imgSchema)