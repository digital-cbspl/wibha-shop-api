const service = require("../services/materialService");

// CREATE
exports.create = async (req, res) => {
  try {
    const { name, product_type_id } = req.body;

    if (!name || !product_type_id) {
      return res.status(400).json({
        message: "Name and product_type_id are required"
      });
    }

    await service.create(req.body);

    res.status(201).json({
      message: "Material created successfully"
    });

  } catch (err) {
    res.status(500).json({
      message: "Create failed",
      error: err.message
    });
  }
};

// GET ALL
exports.getAll = async (req, res) => {
  try {
    res.status(200).json(await service.getAll());
  } catch (err) {
    res.status(500).json({
      message: "Fetch failed",
      error: err.message
    });
  }
};

// GET BY ID
exports.getById = async (req, res) => {
  try {
    const data = await service.getById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Material not found" });
    }

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({
      message: "Fetch failed",
      error: err.message
    });
  }
};

// UPDATE
exports.update = async (req, res) => {
  try {
    await service.update({ ...req.body, id: req.params.id });

    res.status(200).json({
      message: "Material updated successfully"
    });

  } catch (err) {
    res.status(500).json({
      message: "Update failed",
      error: err.message
    });
  }
};

// DELETE
exports.delete = async (req, res) => {
  try {
    await service.delete(req.params.id, req.body.updated_by);

    res.status(200).json({
      message: "Material deleted successfully"
    });

  } catch (err) {
    res.status(500).json({
      message: "Delete failed",
      error: err.message
    });
  }
};

// DROPDOWN
exports.getByProductType = async (req, res) => {
  try {
    res.status(200).json(
      await service.getByProductType(req.params.product_type_id)
    );
  } catch (err) {
    res.status(500).json({
      message: "Fetch failed",
      error: err.message
    });
  }
};