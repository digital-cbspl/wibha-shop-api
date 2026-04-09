const service = require("../services/productService");

// CREATE
exports.create = async (req, res) => {
  try {
    const { name, category_id, product_type_id, price } = req.body;

    if (!name || !category_id || !product_type_id || !price) {
      return res.status(400).json({ 
        message: "name, category_id, product_type_id, and price are required fields." 
      });
    }

    await service.create(req.body);

    res.status(201).json({ message: "Product created" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL (FILTER API)
exports.getAll = async (req, res) => {
  try {
    const data = await service.getAll({
      category_id: req.query.category_id || null,
      gender_id: req.query.gender_id || null,
      price: req.query.price || null,
      search: req.query.search || null,
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10
    });

    res.json(data);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET BY ID
exports.getById = async (req, res) => {
  const data = await service.getById(req.params.id);

  if (!data) return res.status(404).json({ message: "Not found" });

  res.json(data);
};

// UPDATE
exports.update = async (req, res) => {
  await service.update({ ...req.body, id: req.params.id });

  res.json({ message: "Updated" });
};

// DELETE
exports.delete = async (req, res) => {
  await service.delete(req.params.id);

  res.json({ message: "Deleted" });
};