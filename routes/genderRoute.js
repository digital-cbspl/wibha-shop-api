const express = require("express");
const router = express.Router();
const controller = require("../controllers/genderController");

/**
 * @swagger
 * tags:
 *   name: Genders
 *   description: Gender management APIs
 */

/**
 * @swagger
 * /api/genders:
 *   post:
 *     summary: Create a new gender
 *     tags: [Genders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Male
 *               created_by:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Gender created successfully
 */
router.post("/genders", controller.createGender);

/**
 * @swagger
 * /api/genders:
 *   get:
 *     summary: Get all genders
 *     tags: [Genders]
 *     responses:
 *       200:
 *         description: List of genders
 */
router.get("/genders", controller.getGenders);

/**
 * @swagger
 * /api/genders/{id}:
 *   get:
 *     summary: Get gender by ID
 *     tags: [Genders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Gender data
 *       404:
 *         description: Gender not found
 */
router.get("/genders/:id", controller.getGenderById);

/**
 * @swagger
 * /api/genders/{id}:
 *   put:
 *     summary: Update gender
 *     tags: [Genders]
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
 *             name: "Unisex"
 *             updated_by: 1
 *     responses:
 *       200:
 *         description: Gender updated successfully
 */
router.put("/genders/:id", controller.updateGender);

/**
 * @swagger
 * /api/genders/{id}:
 *   delete:
 *     summary: Delete gender
 *     tags: [Genders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Gender deleted successfully
 */
router.delete("/genders/:id", controller.deleteGender);

module.exports = router;