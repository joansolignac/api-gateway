import * as joi from 'joi';

export const validationSchema = joi.object({
    NODE_ENV: joi
        .string()
        .valid('dev', 'test', 'prod')
        .required(),
    PORT: joi
        .number()
        .default(3000)
});