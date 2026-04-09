const express = require("express");
const router = express.Router();
const controller = require("../controllers/productTypeController");

/**
 * @swagger
 * tags:
 *   name: ProductTypes
 *   description: Product Type management APIs
 */

/**
 * @swagger
 * /api/product-types:
 *   post:
 *     summary: Create product type
 *     tags: [ProductTypes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - category_id
 *             properties:
 *               name:
 *                 type: string
 *                 example: T-Shirts
 *               category_id:
 *                 type: integer
 *                 example: 1
 *               created_by:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Product type created successfully
 *       400:
 *         description: Validation error
 */
router.post("/product-types", controller.create);

/**
 * @swagger
 * /api/product-types:
 *   get:
 *     summary: Get all product types with category
 *     tags: [ProductTypes]
 *     responses:
 *       200:
 *         description: List of product types
 */
router.get("/product-types", controller.getAll);

/**
 * @swagger
 * /api/product-types/{id}:
 *   get:
 *     summary: Get product type by ID
 *     tags: [ProductTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Product type data
 *       404:
 *         description: Not found
 */
router.get("/product-types/:id", controller.getById);

/**
 * @swagger
 * /api/product-types/{id}:
 *   put:
 *     summary: Update product type
 *     tags: [ProductTypes]
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
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               category_id:
 *                 type: integer
 *               updated_by:
 *                 type: integer
 *             example:
 *               name: "Shirts"
 *               category_id: 1
 *               updated_by: 1
 *     responses:
 *       200:
 *         description: Product type updated successfully
 */
router.put("/product-types/:id", controller.update);

/**
 * @swagger
 * /api/product-types/{id}:
 *   delete:
 *     summary: Delete product type
 *     tags: [ProductTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Product type deleted successfully
 */
router.delete("/product-types/:id", controller.delete);

/**
 * @swagger
 * /api/product-types/category/{category_id}:
 *   get:
 *     summary: Get product types by category (dropdown)
 *     tags: [ProductTypes]
 *     parameters:
 *       - in: path
 *         name: category_id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: List of product types for dropdown
 */
router.get("/product-types/category/:category_id", controller.getByCategory);

module.exports = router;