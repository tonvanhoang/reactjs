const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const mongoose = require('mongoose')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/products');
var categoryRouter = require('./routes/categories');
var accountRouter = require('./routes/account');
var commentRouter = require('./routes/comment')
var orderRouter = require('./routes/order')
var orderdetailRouter = require('./routes/orderdetails')
// models
require('./models/category');
require('./models/product');
require('./models/account');
require('./models/comment');
require('./models/order')
require('./models/orderdetails')
// kết nối databasse
mongoose.connect('mongodb://127.0.0.1:27017/webgiaynike', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>console.log('>>>>>>>>>>>>>>>>>> Bạn đã kết nối với database thành công'))
.catch(err => console.log('>>>>>>>>>>> Bạn kết nối khoong thành công (NGU)', err));
var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product',productRouter);
app.use('/category',categoryRouter)
app.use('/account',accountRouter);
app.use('/comment',commentRouter);
app.use('/order',orderRouter)
app.use('/orderdetail',orderdetailRouter)
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
