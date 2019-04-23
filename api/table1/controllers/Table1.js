'use strict';

/**
 * Table1.js controller
 *
 * @description: A set of functions called "actions" for managing `Table1`.
 */

module.exports = {

  /**
   * Retrieve table1 records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.table1.search(ctx.query);
    } else {
      return strapi.services.table1.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a table1 record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.table1.fetch(ctx.params);
  },

  /**
   * Count table1 records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.table1.count(ctx.query);
  },

  /**
   * Create a/an table1 record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.table1.add(ctx.request.body);
  },

  /**
   * Update a/an table1 record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.table1.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an table1 record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.table1.remove(ctx.params);
  }
};
