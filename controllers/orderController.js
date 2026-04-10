const service = require("../services/orderService");

// CREATE
exports.create = async (req, res) => {
  try {
    const { user_id, address_id, total_amount } = req.body;

    if (!user_id || !address_id || !total_amount) {
      return res.status(400).json({
        message: "user_id, address_id, total_amount required"
      });
    }

    await service.create(req.body);

    res.status(201).json({
      message: "Order created successfully"
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
    res.status(500).json({ message: err.message });
  }
};

// GET BY ID
exports.getById = async (req, res) => {
  try {
    const data = await service.getById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
exports.update = async (req, res) => {
  try {
    await service.update({ ...req.body, id: req.params.id });

    res.json({ message: "Order updated successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
exports.delete = async (req, res) => {
  try {
    await service.delete(req.params.id);

    res.json({ message: "Order deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};