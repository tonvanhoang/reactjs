var express = require('express');
var router = express.Router();
var modelsproduct = require('../models/product')
const mongoose = require('mongoose')
/* GET home page. */
// all product
router.get('/allproduct', async function(req, res, next) {
  const data = await modelsproduct.find()
  res.json(data);
});
// product theo ID chi tiết sản phẩm
router.get('/productByID/:id', async function(req,res, next){
  const {id} = req.params;
  const data = await modelsproduct.findOne({'_id':id});
  res.json(data)
})
// thể thị theo danh mục
router.get('/productBYcate/:id', async function(req,res, next){
  const {id} = req.params;
  const data = await modelsproduct.find({'id_cate':id});
  res.json(data)
});
// thêm 
router.post('/addproduct', async function(req,res, next){
  try{
    const {name,price,quantity,id_cate,img,short_description,description,size} = req.body;
  const {_id} = new mongoose.Types.ObjectId()
  const data = await modelsproduct.create({_id,name,price,quantity,id_cate,img,short_description,description,size});
  res.status(201).json({message:'thêm thành công',data})
  }catch(err){
    console.error('lỗi', err);
    res.status(500).json({err:"đã lỗi"})
  }
})
// xóa
router.delete('/deleteproduct/:id', async function(req,res, next){
  try{
    const {id} = req.params;
 await modelsproduct.findByIdAndDelete(id);
  res.json({message:'xóa thành công'})
  }catch(err){
    console.error('lỗi', err);
    res.status(500).json({err:"đã lỗi"})
  }
});
// sửa
router.put('/editpro/:id', async function(req,res,next){
  try {
    const {id} = req.params;
    const{name,price,quantity,id_cate,img,short_description,description,size} = req.body;
    const data = await modelsproduct.findByIdAndUpdate(id,{name,price,quantity,id_cate,img,short_description,description,size});
    res.status(201).json({mesage:'sửa thành công',data})
  } catch (error) {
    console.log("lỗi",error);
    res.status(500).json({error:"đã lỗi"})
  }
})

module.exports = router;
