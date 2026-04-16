const express = require("express");
const router = express.Router();
const controller = require("../controllers/menuController");

/**
 * @swagger
 * tags:
 *   name: Menu
 *   description: Menu management APIs (Main, Submenu, Mega Menu)
 */

/**
 * @swagger
 * /api/menu:
 *   post:
 *     summary: Create a new menu
 *     tags: [Menu]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *               - location
 *             properties:
 *               name:
 *                 type: string
 *                 example: Products
 *               slug:
 *                 type: string
 *                 example: products
 *               location:
 *                 type: string
 *                 enum: [header, footer]
 *                 example: header
 *               parent_id:
 *                 type: integer
 *                 nullable: true
 *                 example: null
 *               type:
 *                 type: string
 *                 enum: [main, submenu, mega]
 *                 example: main
 *               url:
 *                 type: string
 *                 example: /products
 *               sort_order:
 *                 type: integer
 *                 example: 1
 *               is_active:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Menu created successfully
 *       400:
 *         description: Validation error
 */
router.post("/menu", controller.createMenu);

/**
 * @swagger
 * /api/menu:
 *   get:
 *     summary: Get all menus (Admin Full List)
 *     tags: [Menu]
 *     responses:
 *       200:
 *         description: List of menus
 */
router.get("/menu", controller.getMenus);

/**
 * @swagger
 * /api/menu/location/{location}:
 *   get:
 *     summary: Get menus by specific location (Header/Footer)
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: location
 *         required: true
 *         schema:
 *           type: string
 *           enum: [header, footer]
 *         example: footer
 *     responses:
 *       200:
 *         description: List of menus filtered by location
 */
router.get("/menu/location/:location", controller.getMenuByLocation);

/**
 * @swagger
 * /api/menu/{id}:
 *   get:
 *     summary: Get menu by ID
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Menu data
 *       404:
 *         description: Menu not found
 */
router.get("/menu/:id", controller.getMenuById);

/**
 * @swagger
 * /api/menu/parent/{parent_id}:
 *   get:
 *     summary: Get submenu or mega menu by parent ID
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: parent_id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Submenu / Mega menu list
 */
router.get("/menu/parent/:parent_id", controller.getMenuByParent);

/**
 * @swagger
 * /api/menu/{id}:
 *   put:
 *     summary: Update menu
 *     tags: [Menu]
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
 *               slug:
 *                 type: string
 *               location:
 *                 type: string
 *                 enum: [header, footer]
 *               parent_id:
 *                 type: integer
 *                 nullable: true
 *               type:
 *                 type: string
 *                 enum: [main, submenu, mega]
 *               url:
 *                 type: string
 *               is_active:
 *                 type: integer
 *               sort_order:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Menu updated successfully
 */
router.put("/menu/:id", controller.updateMenu);

/**
 * @swagger
 * /api/menu/{id}:
 *   delete:
 *     summary: Delete menu (soft delete)
 *     tags: [Menu]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Menu deleted successfully
 */
router.delete("/menu/:id", controller.deleteMenu);

module.exports = router;