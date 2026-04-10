const express = require("express");
const router = express.Router();
const controller = require("../controllers/orderItemsController");

/**
 * @swagger
 * tags:
 *   name: OrderItems
 *   description: Order Items APIs
 */

/**
 * @swagger
 * /api/order-items:
 *   post:
 *     summary: Create order item
 *     tags: [OrderItems]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             order_id: 1
 *             product_id: 1
 *             quantity: 2
 *             price: 500
 *             status: "pending"
 *     responses:
 *       201:
 *         description: Order item created
 */
router.post("/order-items", controller.create);

/**
 * @swagger
 * /api/order-items:
 *   get:
 *     summary: Get all order items
 *     tags: [OrderItems]
 *     responses:
 *       200:
 *         description: List of order items
 */
router.get("/order-items", controller.getAll);

/**
 * @swagger
 * /api/order-items/{id}:
 *   get:
 *     summary: Get order item by ID
 *     tags: [OrderItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Order item data
 */
router.get("/order-items/:id", controller.getById);

/**
 * @swagger
 * /api/order-items/order/{order_id}:
 *   get:
 *     summary: Get items by order
 *     tags: [OrderItems]
 *     parameters:
 *       - in: path
 *         name: order_id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Items retrieved successfully
 */
router.get("/order-items/order/:order_id", controller.getByOrder);

/**
 * @swagger
 * /api/order-items/{id}:
 *   put:
 *     summary: Update order item
 *     tags: [OrderItems]
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
 *             quantity: 3
 *             status: "completed"
 *     responses:
 *       200:
 *         description: Order item updated successfully
 */
router.put("/order-items/:id", controller.update);

/**
 * @swagger
 * /api/order-items/{id}:
 *   delete:
 *     summary: Delete order item
 *     tags: [OrderItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Order item deleted successfully
 */
router.delete("/order-items/:id", controller.delete);

module.exports = router;