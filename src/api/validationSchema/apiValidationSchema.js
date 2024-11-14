const Joi = require('joi');

exports.createUserSchema = Joi.object({
    user_name: Joi.string().required(),
    phone_number: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirm_password: Joi.string().required().valid(Joi.ref('password'))
});

exports.addStudentSchema = Joi.object({
    user_name: Joi.string().required(),
    phone_number: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
    email: Joi.string().email().required()
});

exports.editStudentSchema = Joi.object({
    user_name: Joi.string().required(),
    userId: Joi.string().required(),
    phone_number: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
    email: Joi.string().email().required()
});

exports.signInUserSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});

exports.editUserSchema = Joi.object({
    user_name: Joi.string().required(),
    phone_number: Joi.string().required(),
    email: Joi.string().required(),
});