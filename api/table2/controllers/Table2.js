'use strict';

/**
 * Table2.js controller
 *
 * @description: A set of functions called "actions" for managing `Table2`.
 */

module.exports = {

  /**
   * Retrieve table2 records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.table2.search(ctx.query);
    } else {
      return strapi.services.table2.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a table2 record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.table2.fetch(ctx.params);
  },

  /**
   * Count table2 records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.table2.count(ctx.query);
  },

  /**
   * Create a/an table2 record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.table2.add(ctx.request.body);
  },

  /**
   * Update a/an table2 record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.table2.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an table2 record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.table2.remove(ctx.params);
  }
};
