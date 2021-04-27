const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    user_privileges: {
        type: mongoose.Schema.Types.ObjectId,
        re
    }
})







module.exports = mongoose.model('User',userSchema);