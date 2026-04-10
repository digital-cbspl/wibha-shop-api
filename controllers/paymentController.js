const service = require("../services/paymentService");

// CREATE
exports.create = async (req, res) => {
  try {
    const { order_id, amount } = req.body;

    if (!order_id || !amount) {
      return res.status(400).json({
        message: "order_id and amount required"
      });
    }

    await service.create(req.body);

    res.status(201).json({
      message: "Payment created successfully"
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL
exports.getAll = async (req, res) => {
  res.json(await service.getAll());
};

// GET BY ID
exports.getById = async (req, res) => {
  const data = await service.getById(req.params.id);

  if (!data) return res.status(404).json({ message: "Not found" });

  res.json(data);
};

// GET BY ORDER
exports.getByOrder = async (req, res) => {
  res.json(await service.getByOrder(req.params.order_id));
};

// UPDATE
exports.update = async (req, res) => {
  await service.update({ ...req.body, id: req.params.id });

  res.json({ message: "Updated successfully" });
};

// DELETE
exports.delete = async (req, res) => {
  await service.delete(req.params.id);

  res.json({ message: "Deleted successfully" });
};