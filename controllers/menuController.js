const service = require("../services/menuServices");

// 👉 CREATE
exports.createMenu = async (req, res) => {
  try {
    const { name, type, location } = req.body; // Added location

    // Validate required fields for the menu_crud SP
    if (!name || !type || !location) {
      return res.status(400).json({
        message: "Name, type, and location are required"
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

// 👉 GET BY LOCATION (Critical for Header/Footer binding)
exports.getMenuByLocation = async (req, res) => {
  try {
    const { location } = req.params; // e.g., /api/menu/location/footer
    
    if (!location) {
      return res.status(400).json({ message: "Location is required" });
    }

    const menus = await service.getMenuByLocation(location);
    res.status(200).json(menus);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch menus for this location",
      error: error.message
    });
  }
};

// 👉 GET ALL (Updated for Admin Dashboard)
exports.getMenus = async (req, res) => {
  try {
    const menus = await service.getMenus();
    // This returns the result of the 'GET' action in your menu_crud SP
    res.status(200).json(menus);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch menus",
      error: error.message
    });
  }
};

// ... (Keep getMenuById, getMenuByParent, updateMenu, and deleteMenu as they were)

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
//  REORDER (New Method for Drag & Drop)
exports.reorderMenus = async (req, res) => {
  try {
    const { items } = req.body; // Array of { id, sort_order }

    if (!items || !Array.isArray(items)) {
      return res.status(400).json({
        message: "Invalid data format. 'items' must be an array."
      });
    }

    await service.reorderMenus(items);

    res.status(200).json({
      message: "Menu sort order updated successfully"
    });
    
  } catch (error) {
    console.error("Controller Error (reorder):", error);
    res.status(500).json({
      message: "Failed to update sort order",
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