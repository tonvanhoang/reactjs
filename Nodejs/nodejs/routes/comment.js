var express = require('express');
var router = express.Router();
var modelscomment = require('../models/comment')
const mongoose = require('mongoose')
/* GET home page. */
router.get('/all',async function(req,res,next){
    const data = await modelscomment.find();
    res.json(data)
})
router.get('/cmtbyid/:id',async function(req,res,next){
    const {id}=req.params
    const data = await modelscomment.findOne({'_id':id});
    res.json(data)
})
router.get('/commentbyid/:id', async function(req,res,next){
        const{id} = req.params;
        const data = await modelscomment.find({'id_product':id});
        res.json(data);
})
router.post('/add' ,async function(req,res,next){
    const {_id} = new mongoose.Types.ObjectId();
    const {id_account,id_product,comment,rep_comment} = req.body;
    const data = await modelscomment.create({_id,id_account,id_product,comment,rep_comment})
    res.status(201).json({mesage:'thành công',data})
})
router.delete('/delete/:id', async function(req, res, next) {
    try {
        const { id } = req.params;
        await modelscomment.findByIdAndDelete(id);
        res.status(201).json({ message: "Xóa thành công" });
    } catch (err) {
        console.error('Lỗi', err);
        res.status(500).json({ message: "Lỗi" });
    }
});
router.put('/e/:id', async function(req, res, next) {
    try {
        const { id } = req.params;
        const { comment,rep_comment,datecomment,id_product,id_account } = req.body;
        const data = await modelscomment.findByIdAndUpdate(id, { comment,rep_comment,datecomment,id_product,id_account  }, { new: true });
        res.status(201).json({ message: 'Thành công', data });
    } catch (error) {
        console.log('Thất bại', error);
        res.status(500).json({ message: 'Thất bại', error: error.message });
    }
});
router.put('/edit/:id', async function(req, res, next) {
    try {
        const { id } = req.params;
        const {rep_comment} = req.body;
        const data = await modelscomment.findByIdAndUpdate(id, {rep_comment}, { new: true });
        res.status(201).json({ message: 'Thành công', data });
    } catch (error) {
        console.log('Thất bại', error);
        res.status(500).json({ message: 'Thất bại', error: error.message });
    }
});
module.exports = router;
