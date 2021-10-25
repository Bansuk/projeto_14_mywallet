import joi from "joi";

const accountSchema = joi.object({
    name: joi
        .string()
        .min(2)
        .max(20)
        .pattern(/^[A-Z]+$/i)
        .required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).max(64).required(),
    passwordConfirmation: joi.ref("password"),
});

const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).max(64).required(),
});

const transactionSchema = joi.object({
    description: joi.string().alphanum().max(30).required(),
    value: joi.number().precision(2).required(),
});

export { accountSchema, signInSchema, transactionSchema };
