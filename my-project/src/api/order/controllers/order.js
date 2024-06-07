// const stripe = require("stripe")(process.env.STRIPE_KEY);

("use strict");

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order");
// , ({ strapi }) => ({
//   async create(ctx) {
//     const { email, products } = ctx.request.body;

//   },
// })
