import Joi from 'joi';

 export const bookSchema = Joi.object({

    title: Joi.string().required()
    .messages({
        'string.empty': 'tiltle cannot be empty',
        'any.required': 'Title is required'
    }),

    author: Joi.string().required()
    .messages({
        'string.empty': 'Author cannot be empty',
        'any.required': 'Author is required'
    }),

    publicationYear: Joi.number().required()
    .messages({
        'string.empty': 'Publication Year cannot be empty',
        'any.required': 'Publication Year is required'
    }),

    bookCategory: Joi.string()
    .messages({
        'string.empty': 'Book Category cannot be empty',
        
    }),

    publicationCompany: Joi.string()
    .messages({
        'string.empty': 'Publication Company cannot be empty',
        
    }),

    image: Joi.string()
    .messages({
        'string.empty': 'Image must be a valid URl',
        
    }),
  
});

