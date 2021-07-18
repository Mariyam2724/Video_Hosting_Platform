const express = require('express');
// const { Model } = require('mongoose');
const router = express.Router();
const Model= require('../models/videoModel');





router.post("/add" , (req,res) => {
console.log(req.body);

new Model(req.body).save()
.then( () => {
    console.log('video data saved');
    res.json({ message : 'success'});
})
.catch( (err) => {
    console.error(err);
    res.json(err);
})
 


})

module.exports=router;