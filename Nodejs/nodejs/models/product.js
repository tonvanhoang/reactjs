const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const product = new Schema({
    _id:{type:ObjectId},
    name:{type:String},
    price:{type:Number},
    quantity:{type:Number},
    img:{type:String},
    short_description:{type:String},
    description:{type:String},
    id_cate:{type:ObjectId, ref:'category'},
    size:[{type:String}]
});
module.exports = mongoose.models.product || mongoose.model('product',product);