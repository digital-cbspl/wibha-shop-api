const service = require("../services/varietyService");

// CREATE
exports.create = async (req, res) => {
  try {
    const { name, material_id } = req.body;

    if (!name || !material_id) {
      return res.status(400).json({
        message: "Name and material_id are required"
      });
    }

    await service.create(req.body);

    res.status(201).json({
      message: "Variety created successfully"
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
      return res.status(404).json({ message: "Variety not found" });
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
      message: "Variety updated successfully"
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
    await service.delete(req.params.id);

    res.status(200).json({
      message: "Variety deleted successfully"
    });

  } catch (err) {
    res.status(500).json({
      message: "Delete failed",
      error: err.message
    });
  }
};

// DROPDOWN
exports.getByMaterial = async (req, res) => {
  try {
    res.status(200).json(
      await service.getByMaterial(req.params.material_id)
    );
  } catch (err) {
    res.status(500).json({
      message: "Fetch failed",
      error: err.message
    });
  }
};