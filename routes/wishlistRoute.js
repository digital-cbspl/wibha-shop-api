const express = require("express");
const router = express.Router();
const controller = require("../controllers/wishlistController");

/**
 * @swagger
 * tags:
 *   name: Wishlist
 *   description: Wishlist management APIs
 */

/**
 * @swagger
 * /api/wishlist:
 *   post:
 *     summary: Add product to wishlist
 *     tags: [Wishlist]
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
 *         description: Added successfully
 */
router.post("/wishlist", controller.createWishlist);

/**
 * @swagger
 * /api/wishlist:
 *   get:
 *     summary: Get wishlist (all / by user / by id)
 *     tags: [Wishlist]
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
 *         description: Wishlist data
 */
router.get("/wishlist", controller.getWishlist);

/**
 * @swagger
 * /api/wishlist/{id}:
 *   put:
 *     summary: Update wishlist item
 *     tags: [Wishlist]
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
router.put("/wishlist/:id", controller.updateWishlist);

/**
 * @swagger
 * /api/wishlist/{id}:
 *   delete:
 *     summary: Delete wishlist item
 *     tags: [Wishlist]
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
router.delete("/wishlist/:id", controller.deleteWishlist);

module.exports = router;