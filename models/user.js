const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserShema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    sex: { type: String, required: true }
}, {
        versionKey: false,
        timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
    });


module.exports = mongoose.model('user', UserShema);