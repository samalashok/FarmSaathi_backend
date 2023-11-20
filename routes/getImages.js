const express = require('express');
const router= express.Router();
const imgModel= require('../models/imageData')

router.get('/getImages', async (req, res) => {
    await imgModel.find().then(result=>res.json(result)).catch(err => res.json(err));
})

module.exports= router;