const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const order = new Schema({
    _id:{type:ObjectId},
    date:{type:String,default:currentDate()},
    address:{type:String},
    status:{type:String,
        default:"Đang chờ xử lí"
    },
    name:{type:String},
    phonenumber:{type:Number},
    id_account:{type:String,ref:'account'},
    id_product:{type:Array,ref:'product'},
});
function currentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
}
module.exports = mongoose.models.order || mongoose.model('order',order);