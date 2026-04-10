const express = require("express");
const router = express.Router();
const controller = require("../controllers/orderController");

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Orders API
 */

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             user_id: 1
 *             address_id: 1
 *             order_no: "ORD123"
 *             total_items: 2
 *             total_amount: 2000
 *             paid_amount: 2000 
 *             due_amount: 0
 *             status: "pending"
 *             payment_status: "paid"
 *             payment_method: "UPI"
 *     responses:
 *       201:
 *         description: Order created
 */
router.post("/orders", controller.create);

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Orders retrieved successfully
 */
router.get("/orders", controller.getAll);

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Get order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Order retrieved successfully
 */
router.get("/orders/:id", controller.getById);

/**
 * @swagger
 * /api/orders/{id}:
 *   put:
 *     summary: Update order
 *     tags: [Orders]
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
 *             status: "completed"
 *             payment_status: "paid"
 *     responses:
 *       200:
 *         description: Order updated successfully
 */
router.put("/orders/:id", controller.update);

/**
 * @swagger
 * /api/orders/{id}:
 *   delete:
 *     summary: Delete order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Order deleted successfully
 */
router.delete("/orders/:id", controller.delete);

module.exports = router;