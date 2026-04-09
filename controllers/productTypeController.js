const service = require("../services/productTypeService");

// CREATE
exports.create = async (req, res) => {
  try {
    const { name, category_id } = req.body;

    if (!name || !category_id) {
      return res.status(400).json({ message: "Name & category_id required" });
    }

    await service.create(req.body);

    res.status(201).json({ message: "Product type created" });

  } catch (err) {
    res.status(500).json({ message: "Create failed", error: err.message });
  }
};

// GET ALL
exports.getAll = async (req, res) => {
  try {
    res.json(await service.getAll());
  } catch (err) {
    res.status(500).json({ message: "Fetch failed", error: err.message });
  }
};

// GET BY ID
exports.getById = async (req, res) => {
  try {
    const data = await service.getById(req.params.id);

    if (!data) return res.status(404).json({ message: "Not found" });

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed", error: err.message });
  }
};

// UPDATE
exports.update = async (req, res) => {
  try {
    await service.update({ ...req.body, id: req.params.id });

    res.json({ message: "Updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};

// DELETE
exports.delete = async (req, res) => {
  try {
    await service.delete(req.params.id, req.body.updated_by);

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};

// DROPDOWN
exports.getByCategory = async (req, res) => {
  try {
    res.json(await service.getByCategory(req.params.category_id));
  } catch (err) {
    res.status(500).json({ message: "Fetch failed", error: err.message });
  }
};