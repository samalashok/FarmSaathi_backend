const express = require('express');
const addressSchema = require('../models/addressData');
const router = express.Router();

router.post('/setAddress', async (req, res) => {
    await addressSchema.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        zipcode: req.body.zipcode,
        city: req.body.city,
        state: req.body.state,
        loc: req.body.loc,
        address1: req.body.address1,
        address2: req.body.address
    }).then((data) => res.json({data:data,msg:'success'})).catch((err)=>console.error(err))
})

module.exports = router