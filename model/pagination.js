'use strict';
const Joi = require('joi');

const MODEL = {
    page: Joi
        .number().integer().min(1)
        .default(1)
        .description('Page to paginate'),

    count: Joi
        .number().integer().min(1)
        .max(50)
        .default(50)
        .description('Count to paginate')
};

/**
 * All the available properties of Pagination
 *
 * @return {Joi} Joi Object
 */
module.exports = Joi.object(MODEL).label('Pagination');
