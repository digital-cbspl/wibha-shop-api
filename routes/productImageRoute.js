const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const controller = require("../controllers/productImageController");

/**
 * @swagger
 * tags:
 *   name: ProductImages
 */

/**
 * @swagger
 * /api/product-images:
 *   post:
 *     summary: Upload product images
 *     tags: [ProductImages]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - product_id
 *               - images
 *             properties:
 *               product_id:
 *                 type: integer
 *                 example: 1
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Images uploaded
 */
router.post(
  "/product-images",
  upload.array("images", 10),
  controller.uploadImages
);

/**
 * @swagger
 * /api/product-images/{product_id}:
 *   get:
 *     summary: Get images by product
 *     tags: [ProductImages]
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: List of images
 */
router.get("/product-images/:product_id", controller.getImages);

/**
 * @swagger
 * /api/product-images/{id}:
 *   delete:
 *     summary: Delete image
 *     tags: [ProductImages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 5
 *     responses:
 *       200:
 *         description: Image deleted successfully
 */
router.delete("/product-images/:id", controller.deleteImage);

module.exports = router;