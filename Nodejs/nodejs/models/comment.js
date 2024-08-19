const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const comment = new Schema({
    _id:{type:ObjectId},
    comment:{type:String},
    rep_comment:{type:String},
    datecomment:{type:String,
        default:currentDate()
    },
    id_account:{type:String,ref:'account'},
    id_product:{type:String,ref:'product'},
});
function currentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
}
module.exports = mongoose.models.comment || mongoose.model('comment',comment);