var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const modelsorder = require('../models/order')
/* GET home page. */
router.get('/all',async function(req, res, next) {
  const data = await modelsorder.find()
  res.json(data)
});
router.get('/chitiet/:id', async function(req, res, next) {
  const {id} = req.params;
  const data = await modelsorder.findOne({'_id':id});
  res.json(data)
});
router.get('/orderbyid/:id', async function(req, res, next) {
    const {id} = req.params;
    const data = await modelsorder.find({'id_account':id});
    res.json(data)
  });
router.post('/addorder', async function(req,res,next){
    try {
        const {_id} = new mongoose.Types.ObjectId()
        const {address,name,phonenumber,id_account,id_product} = req.body;
        const data = await modelsorder.create({_id,address,name,phonenumber,id_account,id_product})
        res.json(data)
    } catch (error) {
        res.json({mesage:'lỗi'})
    }
})
router.put('/editorder/:id', async function(req,res,next){
  try {
  const {id} = req.params;
  const {status} = req.body;
  const data = await modelsorder.findByIdAndUpdate(id,{status})
  res.json({mesage:'thành công',data})
  } catch (error) {
    res.json({error:'thất bại',error})
  }
})
module.exports = router;
