const express = require("express");
const router = express.Router();
const controller = require("../controllers/couponController");

/**
 * @swagger
 * tags:
 *   name: Coupons
 *   description: Coupon management APIs
 */

/**
 * @swagger
 * /api/coupons:
 *   post:
 *     summary: Create coupon
 *     tags: [Coupons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             code: "SAVE20"
 *             type: "PERCENT"
 *             value: 20
 *             min_cart_amount: 500
 *             max_discount: 200
 *             usage_limit: 100
 *             per_user_limit: 1
 *             start_date: "2026-04-10"
 *             end_date: "2026-04-20"
 *             created_by: 1
 *     responses:
 *       201:
 *         description: Coupon created
 */
router.post("/coupons", controller.createCoupon);

/**
 * @swagger
 * /api/coupons:
 *   get:
 *     summary: Get coupons
 *     tags: [Coupons]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Coupon list
 */
router.get("/coupons", controller.getCoupons);

/**
 * @swagger
 * /api/coupons/{id}:
 *   put:
 *     summary: Update coupon
 *     tags: [Coupons]
 */
router.put("/coupons/:id", controller.updateCoupon);

/**
 * @swagger
 * /api/coupons/{id}:
 *   delete:
 *     summary: Delete coupon
 *     tags: [Coupons]
 */
router.delete("/coupons/:id", controller.deleteCoupon);

/**
 * @swagger
 * /api/coupons/apply:
 *   post:
 *     summary: Apply coupon
 *     tags: [Coupons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             code: "SAVE20"
 *             user_id: 1
 *             cart_amount: 1000
 *     responses:
 *       200:
 *         description: Coupon applied
 */
router.post("/coupons/apply", controller.applyCoupon);

module.exports = router;