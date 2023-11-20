const express= require('express');
const router= express.Router();
const contactSchema= require('../models/contactData');

router.post('/contactUs',async (req, res) => {
    const contact=await contactSchema.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        msg: req.body.msg
    })
    if(contact){
        return res.status(200).json({success: true,msg:'Thanks for contacting, We will get back to you soon'});
    }
    else{
        return res.status(400).json({success: false,msg:'Something went wrong'});
    }
})

module.exports = router