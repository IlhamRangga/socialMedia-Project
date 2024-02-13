import Joi from 'joi';

const registerSchema = Joi.object({
    username: Joi.string().alphanum().required(),
    password: Joi.string().min(8).required(),
    confPassword: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
})

export  {registerSchema, loginSchema };
