'use strict';

/**
 * xe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::xe.xe');
