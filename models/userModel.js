const { default: mongoose } = require('mongoose');
const mangoose = require('mongoose');
const userSchema = new mangoose.Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
    },
    { timestamps: true }
);
const User = mongoose.model('User', userSchema);




module.exports = User;

