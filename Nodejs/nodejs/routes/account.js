const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const modelsaccount = require('../models/account');

// Middleware để xác thực JWT
const authenticateToken = require('../middleware/authen');

// Lấy tất cả tài khoản
router.get('/allaccount', async function(req, res, next) {
    const data = await modelsaccount.find();
    res.json(data);
});

// Lấy tài khoản theo ID
router.get('/accountbyid/:id', async function(req, res, next) {
    const { id } = req.params;
    const data = await modelsaccount.findOne({ '_id': id });
    res.json(data);
});

// Xóa tài khoản
router.delete('/delete/:id', async function(req, res, next) {
    try {
        const { id } = req.params;
        await modelsaccount.findByIdAndDelete(id);
        res.status(200).json({ message: "Xóa thành công" });
    } catch (err) {
        console.error('Lỗi', err);
        res.status(500).json({ message: "Lỗi" });
    }
});

// Thêm tài khoản
// Sửa tài khoản
router.put('/edit/:id', async function(req, res, next) {
    try {
        const { id } = req.params;
        const {role, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const data = await modelsaccount.findByIdAndUpdate(id, {role, password: hashedPassword});
        res.status(201).json({ message: 'Thành công', data });
    } catch (error) {
        console.log('Thất bại', error);
        res.status(500).json({ message: 'Thất bại' });
    }
});
// Đăng ký người dùng
router.post('/register', async function(req,res,next) {
    try{
        const {_id} = new mongoose.Types.ObjectId();
        const {name,role,password,email,avata,phoneNumber}= req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const data  = await modelsaccount.create({_id,name,role,password:hashedPassword,email,avata,phoneNumber})
        res.status(200).json({message:'thêm thành công',data})
        }catch(err){
            console.error('lỗi',err);
            res.status(500).json({err:"đã lỗi"})
    }
})
// Đăng nhập người dùng
router.post('/login', async function(req, res, next) {
    try {
        const { email, password } = req.body;
        // Kiểm tra xem email và password đã được cung cấp không
        if (!email || !password) {
            return res.status(400).json({ message: 'Vui lòng cung cấp email và mật khẩu.' });
        }
        // Tìm kiếm người dùng trong database bằng email
        const user = await modelsaccount.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
        }
        // Kiểm tra mật khẩu
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
        }
        // Tạo và trả về token JWT nếu đăng nhập thành công
        const token = jwt.sign({ userId: user._id, role: user.role }, 'secret_key', { expiresIn: '1h' });
        console.log(token);
        res.status(200).json({ message: 'Đăng nhập thành công', token,role: user.role,
        account: {
            _id: user._id,
            email: user.email,
            name: user.name,
            avata:user.avata
        } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }
});
module.exports = router;
