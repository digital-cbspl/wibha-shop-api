const express = require("express");
const router = express.Router();
const controller = require("../controllers/reviewController");

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Product Review APIs
 */

/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Add review
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             user_id: 1
 *             product_id: 10
 *             rating: 5
 *             review: "Excellent product"
 *             created_by: 1
 *     responses:
 *       201:
 *         description: Review added
 */
router.post("/reviews", controller.createReview);

/**
 * @swagger
 * /api/reviews:
 *   get:
 *     summary: Get reviews (all / by id / by user / by product)
 *     tags: [Reviews]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         example: 1
 *       - in: query
 *         name: user_id
 *         schema:
 *           type: integer
 *         example: 1
 *       - in: query
 *         name: product_id
 *         schema:
 *           type: integer
 *         example: 10
 *     responses:
 *       200:
 *         description: Review list
 */
router.get("/reviews", controller.getReviews);

/**
 * @swagger
 * /api/reviews/{id}:
 *   put:
 *     summary: Update review
 *     tags: [Reviews]
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
 *             rating: 4
 *             review: "Good product"
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put("/reviews/:id", controller.updateReview);

/**
 * @swagger
 * /api/reviews/{id}:
 *   delete:
 *     summary: Delete review
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Deleted successfully
 */
router.delete("/reviews/:id", controller.deleteReview);

module.exports = router;