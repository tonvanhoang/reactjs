const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const orderdetail = new Schema({
    _id:{type:ObjectId},
    product:[{
        id_product:{type:ObjectId,ref:'product' },
        setQuantity:{type:Number},
        setsize:{type:String},
        img:{type:String},
        price:{type:Number},
        name:{type:String}
    }],
    idOrder:{type:ObjectId,ref:'order'}
});

module.exports = mongoose.models.orderdetail || mongoose.model('orderdetail',orderdetail);