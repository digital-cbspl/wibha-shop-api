const express = require("express");
const router = express.Router();
const controller = require("../controllers/addressController");

/**
 * @swagger
 * tags:
 *   name: Address
 *   description: User Address Management APIs
 */

/**
 * @swagger
 * /api/address:
 *   post:
 *     summary: Create a new address (Max 5 per user)
 *     tags: [Address]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             user_id: 1
 *             full_name: "John Doe"
 *             phone: "9876543210"
 *             alt_phone: "9123456789"
 *             address_line1: "Street 1"
 *             address_line2: "Apartment 2"
 *             city: "Kolkata"
 *             state: "WB"
 *             postal_code: "700001"
 *             country: "India"
 *             created_by: 1
 *     responses:
 *       201:
 *         description: Address created successfully
 *       400:
 *         description: Validation error / Max limit reached
 */
router.post("/address", controller.createAddress);

/**
 * @swagger
 * /api/address:
 *   get:
 *     summary: Get addresses (all / by id / by user)
 *     tags: [Address]
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: false
 *         description: Address ID
 *       - in: query
 *         name: user_id
 *         schema:
 *           type: integer
 *         required: false
 *         description: User ID
 *     responses:
 *       200:
 *         description: Address list
 */
router.get("/address", controller.getAddress);

/**
 * @swagger
 * /api/address/{id}:
 *   put:
 *     summary: Update address (auto set as default)
 *     tags: [Address]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             user_id: 1
 *             full_name: "John Updated"
 *             phone: "9999999999"
 *             alt_phone: "8888888888"
 *             address_line1: "New Street"
 *             city: "Kolkata"
 *             state: "WB"
 *             postal_code: "700002"
 *             country: "India"
 *             updated_by: 1
 *     responses:
 *       200:
 *         description: Address updated
 */
router.put("/address/:id", controller.updateAddress);

/**
 * @swagger
 * /api/address/{id}:
 *   delete:
 *     summary: Delete address (soft delete)
 *     tags: [Address]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             user_id: 1
 *             updated_by: 1
 *     responses:
 *       200:
 *         description: Address deleted
 */
router.delete("/address/:id", controller.deleteAddress);

/**
 * @swagger
 * /api/address/default/{id}:
 *   put:
 *     summary: Set default address
 *     tags: [Address]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             user_id: 1
 *     responses:
 *       200:
 *         description: Default address updated
 */
router.put("/address/default/:id", controller.setDefaultAddress);

module.exports = router;