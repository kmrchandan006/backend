const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the user schema
const userSchema = new Schema({
    user_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure email addresses are unique
    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: true
    },

}, { timestamps: true });
// Create a User model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
