const express = require("express");
const router = express.Router();
const controller = require("../controllers/varietyController");

/**
 * @swagger
 * tags:
 *   name: Varieties
 *   description: Variety management APIs
 */

/**
 * @swagger
 * /api/varieties:
 *   post:
 *     summary: Create variety
 *     tags: [Varieties]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - material_id
 *             properties:
 *               name:
 *                 type: string
 *                 example: Slim Fit
 *               material_id:
 *                 type: integer
 *                 example: 1
 *               created_by:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Variety created successfully
 */
router.post("/varieties", controller.create);

/**
 * @swagger
 * /api/varieties:
 *   get:
 *     summary: Get all varieties with material
 *     tags: [Varieties]
 *     responses:
 *       200:
 *         description: List of varieties
 */
router.get("/varieties", controller.getAll);

/**
 * @swagger
 * /api/varieties/{id}:
 *   get:
 *     summary: Get variety by ID
 *     tags: [Varieties]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Variety data
 *       404:
 *         description: Not found
 */
router.get("/varieties/:id", controller.getById);

/**
 * @swagger
 * /api/varieties/{id}:
 *   put:
 *     summary: Update variety
 *     tags: [Varieties]
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
 *               material_id:
 *                 type: integer
 *               updated_by:
 *                 type: integer
 *             example:
 *               name: "Regular Fit"
 *               material_id: 1
 *               updated_by: 1
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put("/varieties/:id", controller.update);

/**
 * @swagger
 * /api/varieties/{id}:
 *   delete:
 *     summary: Delete variety
 *     tags: [Varieties]
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
router.delete("/varieties/:id", controller.delete);

/**
 * @swagger
 * /api/varieties/material/{material_id}:
 *   get:
 *     summary: Get varieties by material (dropdown)
 *     tags: [Varieties]
 *     parameters:
 *       - in: path
 *         name: material_id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Dropdown list
 */
router.get(
  "/varieties/material/:material_id",
  controller.getByMaterial
);

module.exports = router;