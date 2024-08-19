var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const modelsOrderDetail = require('../models/orderdetails');

// GET all order details
router.get('/all', async function(req, res, next) {
    const data = await modelsOrderDetail.find();
    res.json(data);
});

// POST add new order detail
router.post('/add', async function(req, res, next) {
  try {
    const { idOrder, product } = req.body;
    const {_id} = new mongoose.Types.ObjectId()
    const data = await modelsOrderDetail.create({_id, idOrder, product });
    res.status(201).json({ message: 'Thành công', data });
  } catch (error) {
    res.json(500).status({mesaga:'lỗi',error})
  }
});

router.get('/detail/:id', async function(req, res, next) {
  const {id}= req.params
  const data = await modelsOrderDetail.find({'idOrder':id});
  res.json(data);
});
module.exports = router;
