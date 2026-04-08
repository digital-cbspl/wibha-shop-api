const express = require("express");
const router = express.Router();
const userController = require("../controller/usercontroller");

router.post("/create", userController.createUser);
router.get("/getall", userController.getAllUsers);
router.get("/getbyid/:id", userController.getUserById);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;