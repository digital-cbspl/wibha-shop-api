const express = require("express");
const router = express.Router();
const controller = require("../controllers/materialController");

/**
 * @swagger
 * tags:
 *   name: Materials
 *   description: Material management APIs
 */

/**
 * @swagger
 * /api/materials:
 *   post:
 *     summary: Create material
 *     tags: [Materials]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - product_type_id
 *             properties:
 *               name:
 *                 type: string
 *                 example: Cotton
 *               product_type_id:
 *                 type: integer
 *                 example: 1
 *               created_by:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Material created successfully
 *       400:
 *         description: Validation error
 */
router.post("/materials", controller.create);

/**
 * @swagger
 * /api/materials:
 *   get:
 *     summary: Get all materials with product type
 *     tags: [Materials]
 *     responses:
 *       200:
 *         description: List of materials
 */
router.get("/materials", controller.getAll);

/**
 * @swagger
 * /api/materials/{id}:
 *   get:
 *     summary: Get material by ID
 *     tags: [Materials]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Material data
 *       404:
 *         description: Not found
 */
router.get("/materials/:id", controller.getById);

/**
 * @swagger
 * /api/materials/{id}:
 *   put:
 *     summary: Update material
 *     tags: [Materials]
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
 *               product_type_id:
 *                 type: integer
 *               updated_by:
 *                 type: integer
 *             example:
 *               name: "Silk"
 *               product_type_id: 1
 *               updated_by: 1
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put("/materials/:id", controller.update);

/**
 * @swagger
 * /api/materials/{id}:
 *   delete:
 *     summary: Delete material
 *     tags: [Materials]
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
router.delete("/materials/:id", controller.delete);

/**
 * @swagger
 * /api/materials/product-type/{product_type_id}:
 *   get:
 *     summary: Get materials by product type (dropdown)
 *     tags: [Materials]
 *     parameters:
 *       - in: path
 *         name: product_type_id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Dropdown list
 */
router.get(
  "/materials/product-type/:product_type_id",
  controller.getByProductType
);

module.exports = router;