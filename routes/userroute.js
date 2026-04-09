const express = require("express");
const router = express.Router();
const controller = require("../controller/usercontroller");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management APIs
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Abhi Kumar
 *               phone:
 *                 type: string
 *                 example: 9876543210
 *               email:
 *                 type: string
 *                 example: abhi@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *               role:
 *                 type: string
 *                 enum: [admin, user]
 *                 example: user
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Validation error
 */
router.post("/users", controller.createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 */
router.get("/users", controller.getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: User data
 *       404:
 *         description: User not found
 */
router.get("/users/:id", controller.getUserById);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update user
 *     tags: [Users]
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
 *             name: "Updated Name"
 *             phone: "9999999999"
 *             role: "user"
 *             updated_by: 1
 *     responses:
 *       200:
 *         description: User updated successfully
 */
router.put("/users/:id", controller.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete user (soft delete)
 *     tags: [Users]
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
 *             updated_by: 1
 *     responses:
 *       200:
 *         description: User deleted successfully
 */
router.delete("/users/:id", controller.deleteUser);

module.exports = router;