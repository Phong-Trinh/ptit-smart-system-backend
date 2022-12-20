'use strict';

/**
 * tram service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tram.tram');
