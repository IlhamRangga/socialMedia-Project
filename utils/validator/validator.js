import Joi from 'joi';

const registerSchema = Joi.object({
    username: Joi.string().alphanum().required(),
    password: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
})

const updateSchema = Joi.object({
    username: Joi.string().alphanum(),
    password: Joi.string().min(8),
    email: Joi.string().email(),
}).or('username', 'password', 'email')

export  {registerSchema, loginSchema, updateSchema};
