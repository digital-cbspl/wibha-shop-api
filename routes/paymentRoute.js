const express = require("express");
const router = express.Router();
const controller = require("../controllers/paymentController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Payment:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         order_id:
 *           type: integer
 *         payment_id:
 *           type: string
 *         transaction_id:
 *           type: string
 *         amount:
 *           type: number
 *         payment_method:
 *           type: string
 *           example: UPI
 *         type:
 *           type: string
 *           example: payment
 *         status:
 *           type: string
 *           example: success
 *         gateway_response:
 *           type: string
 *         created_at:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Payments APIs
 */

/**
 * @swagger
 * /api/payments:
 *   post:
 *     summary: Create payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             order_id: 1
 *             amount: 2000
 *             payment_method: "UPI"
 *             type: "payment"
 *             status: "success"
 *     responses:
 *       201:
 *         description: Payment created successfully
 *       400:
 *         description: Validation error
 */
router.post("/payments", controller.create);

/**
 * @swagger
 * /api/payments:
 *   get:
 *     summary: Get all payments
 *     tags: [Payments]
 *     responses:
 *       200:
 *         description: List of payments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Payment'
 */
router.get("/payments", controller.getAll);

/**
 * @swagger
 * /api/payments/{id}:
 *   get:
 *     summary: Get payment by ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Payment data
 *       404:
 *         description: Not found
 */
router.get("/payments/:id", controller.getById);

/**
 * @swagger
 * /api/payments/order/{order_id}:
 *   get:
 *     summary: Get payments by order
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: order_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Payments retrieved successfully
 */
router.get("/payments/order/:order_id", controller.getByOrder);

/**
 * @swagger
 * /api/payments/{id}:
 *   put:
 *     summary: Update payment status
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             status: "success"
 *             gateway_response: "Payment verified"
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put("/payments/:id", controller.update);

/**
 * @swagger
 * /api/payments/{id}:
 *   delete:
 *     summary: Delete payment
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Deleted successfully
 */
router.delete("/payments/:id", controller.delete);

module.exports = router;