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
 */
router.post("/menu", controller.createMenu);

/**
 * @swagger
 * /api/menu:
 *   get:
 *     summary: Get all menus (Main + Submenu + Mega)
 *     tags: [Menu]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     sort_order:
 *                       type: integer
 *                       example: 2
 *     responses:
 *       200:
 *         description: Menu sort order updated successfully
 */
router.put("/menu/reorder", controller.reorderMenus);

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
 *     responses:
 *       200:
 *         description: List of menus filtered by location
 */
router.get("/menu/location/:location", controller.getMenuByLocation);

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
 *     responses:
 *       200:
 *         description: Submenu / Mega menu list
 */
router.get("/menu/parent/:parent_id", controller.getMenuByParent);

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
 *     responses:
 *       200:
 *         description: Menu data
 */
router.get("/menu/:id", controller.getMenuById);

/**
 * @swagger
 * /api/menu/{id}:
 *   put:
 *     summary: Update menu details
 *     tags: [Menu]
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
 *           example:
 *             name: "Updated Menu"
 *             slug: "updated-menu"
 *             parent_id: null
 *             type: "main"
 *             is_active: 1
 *             sort_order: 1
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
 *     responses:
 *       200:
 *         description: Menu deleted successfully
 */
router.delete("/menu/:id", controller.deleteMenu);

module.exports = router;