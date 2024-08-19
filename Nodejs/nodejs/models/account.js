const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const account = new Schema({
    _id:{type:ObjectId},
    name:{type:String},
    role:{
        type:String,
        default:"user"
    },
    password:{type:String},
    email:{type:String},
    phoneNumber:{type:Number},
    avata:{type:String,
        default:"https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg"
    }
});
module.exports = mongoose.models.account || mongoose.model('account',account);