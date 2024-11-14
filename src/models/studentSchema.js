const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the user schema
const studentSchema = new Schema({
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
    isDeleted: {
        type: Boolean,
        default: true
    },

}, { timestamps: true });
// Create a User model using the schema
const Student = mongoose.model('Student-Data', studentSchema);

module.exports = Student;
