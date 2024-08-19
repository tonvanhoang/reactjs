var express = require('express');
var router = express.Router();
var modelscategory = require('../models/category')
const mongoose = require('mongoose')
/* GET home page. */
router.get('/allcate', async function(req, res, next) {
  const data = await modelscategory.find();
  res.json(data)
});
router.get('/catebyid/:id', async function(req, res, next) {
  const {id} = req.params;
  const data = await modelscategory.findOne({'_id':id});
  res.json(data)
});
router.post('/addcate', async function(req,res,next){
  const {name} = req.body;
  const {_id} = new mongoose.Types.ObjectId()
  const data = await modelscategory.create({_id,name})
  res.json(data)
})
router.delete('/deletecate/:id', async function(req,res,next){
 try{
  const {id} = req.params;
  await modelscategory.findByIdAndDelete(id)
  res.json({message:'xóa thành công'})

 }
 catch(err){
  console.error('lỗi', err);
    res.status(500).json({err:"đã lỗi"})
 }
})
router.put('/editbyid/:id', async function(req,res,next){
  try{
  const {id} = req.params;
  const {name} = req.body;
  const data  = await modelscategory.findByIdAndUpdate(id,{name});
  res.status(201).json({mesage:'sửa thành công',data})
} catch (error) {
  res.status(500).json({error:"đã lỗi" ,error})
}
})

module.exports = router;
