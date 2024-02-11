const { default: mongoose } = require('mongoose');
const { Schema } = require('../connection');

const mySchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    Password: {
        type: String,
        require: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
});

const User = new mongoose.model("User", mySchema)
module.exports = ('User', mySchema);