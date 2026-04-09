const service = require("../services/categoryService");

// CREATE
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    await service.createCategory(req.body);

    res.status(201).json({ message: "Category created successfully" });

  } catch (error) {
    res.status(500).json({
      message: "Failed to create category",
      error: error.message
    });
  }
};

// GET ALL
exports.getCategories = async (req, res) => {
  try {
    res.json(await service.getCategories());
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch categories",
      error: error.message
    });
  }
};

// GET BY ID
exports.getCategoryById = async (req, res) => {
  try {
    const data = await service.getCategoryById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(data);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch category",
      error: error.message
    });
  }
};

// UPDATE
exports.updateCategory = async (req, res) => {
  try {
    await service.updateCategory({ ...req.body, id: req.params.id });

    res.json({ message: "Category updated successfully" });

  } catch (error) {
    res.status(500).json({
      message: "Failed to update category",
      error: error.message
    });
  }
};

// DELETE
exports.deleteCategory = async (req, res) => {
  try {
    await service.deleteCategory(req.params.id, req.body.updated_by);

    res.json({ message: "Category deleted successfully" });

  } catch (error) {
    res.status(500).json({
      message: "Failed to delete category",
      error: error.message
    });
  }
};