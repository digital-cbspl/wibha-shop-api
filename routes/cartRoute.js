const express = require("express");
const router = express.Router();
const controller = require("../controllers/cartController");

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart management APIs
 */

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Add product to cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             user_id: 1
 *             product_id: 10
 *             quantity: 1
 *             price: 500
 *             created_by: 1
 *     responses:
 *       201:
 *         description: Added to cart
 */
router.post("/cart", controller.createCart);

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: Get cart (all / by user / by id)
 *     tags: [Cart]
 *     parameters:
 *       - in: query
 *         name: user_id
 *         schema:
 *           type: integer
 *         example: 1
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Cart data
 */
router.get("/cart", controller.getCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   put:
 *     summary: Update cart item
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             quantity: 2
 *             price: 450
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put("/cart/:id", controller.updateCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     summary: Remove cart item
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Removed successfully
 */
router.delete("/cart/:id", controller.deleteCart);

module.exports = router;