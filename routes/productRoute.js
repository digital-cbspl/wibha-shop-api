const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management APIs
 */

/**
 * @swagger
 * /api/products/price-range:
 *   get:
 *     summary: Get the absolute minimum and maximum price of all active products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Object containing minPrice and maxPrice
 */
router.get("/products/price-range", controller.getPriceRange);

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get products (filter + search + pagination)
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: category_id
 *         schema:
 *           type: integer
 *       - in: query
 *         name: product_type_id
 *         schema:
 *           type: integer
 *       - in: query
 *         name: material_id
 *         schema:
 *           type: integer
 *       - in: query
 *         name: variety_id
 *         schema:
 *           type: integer
 *       - in: query
 *         name: gender_id
 *         schema:
 *           type: integer
 *       - in: query
 *         name: min_price
 *         schema:
 *           type: number
 *       - in: query
 *         name: max_price
 *         schema:
 *           type: number
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         example: 16
 *     responses:
 *       200:
 *         description: List of products
 */
router.get("/products", controller.getAll);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               category_id:
 *                 type: integer
 *               product_type_id:
 *                 type: integer
 *               material_id:
 *                 type: integer
 *               variety_id:
 *                 type: integer
 *               gender_id:
 *                 type: integer
 *               price:
 *                 type: number
 *               created_by:
 *                 type: integer
 *             example:
 *               name: Example Product
 *               category_id: 1
 *               product_type_id: 1
 *               material_id: 1
 *               variety_id: 1
 *               gender_id: 1
 *               price: 49.99
 *               created_by: 1
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Missing required fields
 */
router.post("/products", controller.create);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product data
 *       404:
 *         description: Product not found
 */
router.get("/products/:id", controller.getById);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update product
 *     tags: [Products]
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
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               category_id:
 *                 type: integer
 *               product_type_id:
 *                 type: integer
 *               material_id:
 *                 type: integer
 *               variety_id:
 *                 type: integer
 *               gender_id:
 *                 type: integer
 *               price:
 *                 type: number
 *               updated_by:
 *                 type: integer
 *             example:
 *               name: Example Product Update
 *               product_type_id: 1
 *               price: 59.99
 *               updated_by: 1
 *     responses:
 *       200:
 *         description: Product updated successfully
 */
router.put("/products/:id", controller.update);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product deleted successfully
 */
router.delete("/products/:id", controller.delete);

module.exports = router;