const service = require("../services/userService");

// CREATE
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required"
      });
    }

    await service.createUser(req.body);

    res.status(201).json({
      message: "User created successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create user",
      error: error.message
    });
  }
};

// GET ALL
exports.getUsers = async (req, res) => {
  try {
    const users = await service.getUsers();

    res.status(200).json(users);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch users",
      error: error.message
    });
  }
};

// GET BY ID
exports.getUserById = async (req, res) => {
  try {
    const user = await service.getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json(user);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch user",
      error: error.message
    });
  }
};

// UPDATE
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "User ID is required"
      });
    }

    await service.updateUser({ ...req.body, id });

    res.status(200).json({
      message: "User updated successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update user",
      error: error.message
    });
  }
};

// DELETE
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "User ID is required"
      });
    }

    await service.deleteUser(id, req.body.updated_by);

    res.status(200).json({
      message: "User deleted successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete user",
      error: error.message
    });
  }
};