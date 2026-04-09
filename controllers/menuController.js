const service = require("../services/menuServices");

// CREATE
exports.createMenu = async (req, res) => {
  try {
    const { name, type } = req.body;

    if (!name || !type) {
      return res.status(400).json({
        message: "Name and type are required"
      });
    }

    await service.createMenu(req.body);

    res.status(201).json({
      message: "Menu created successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create menu",
      error: error.message
    });
  }
};

// GET ALL
exports.getMenus = async (req, res) => {
  try {
    const menus = await service.getMenus();

    res.status(200).json(menus);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch menus",
      error: error.message
    });
  }
};

// GET BY ID
exports.getMenuById = async (req, res) => {
  try {
    const menu = await service.getMenuById(req.params.id);

    if (!menu) {
      return res.status(404).json({
        message: "Menu not found"
      });
    }

    res.status(200).json(menu);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch menu",
      error: error.message
    });
  }
};

// GET BY PARENT (submenu / mega)
exports.getMenuByParent = async (req, res) => {
  try {
    const parent_id = req.params.parent_id;

    if (!parent_id) {
      return res.status(400).json({
        message: "Parent ID is required"
      });
    }

    const menus = await service.getMenuByParent(parent_id);

    res.status(200).json(menus);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch submenu",
      error: error.message
    });
  }
};

// UPDATE
exports.updateMenu = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "Menu ID is required"
      });
    }

    await service.updateMenu({ ...req.body, id });

    res.status(200).json({
      message: "Menu updated successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update menu",
      error: error.message
    });
  }
};

// DELETE (Soft Delete)
exports.deleteMenu = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "Menu ID is required"
      });
    }

    await service.deleteMenu(id);

    res.status(200).json({
      message: "Menu deleted successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete menu",
      error: error.message
    });
  }
};