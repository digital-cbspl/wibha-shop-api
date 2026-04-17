const service = require("../services/productService");
const db = require("../config/db"); // Required for the custom price range query

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

    res.status(201).json({ message: "Product created successfully" });

  } catch (err) {
    console.error("Create Product Error:", err);
    res.status(500).json({ message: err.message });
  }
};

// GET ALL (FILTER API)
exports.getAll = async (req, res) => {
  try {
    const data = await service.getAll({
      category_id: req.query.category_id || null,
      product_type_id: req.query.product_type_id || null,
      material_id: req.query.material_id || null,
      variety_id: req.query.variety_id || null,
      gender_id: req.query.gender_id || null,
      min_price: req.query.min_price || null,
      max_price: req.query.max_price || null,
      search: req.query.search || null,
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 16 // Matches the frontend default
    });

    res.status(200).json(data);

  } catch (err) {
    console.error("Get All Products Error:", err);
    res.status(500).json({ message: err.message });
  }
};

// GET BY ID
exports.getById = async (req, res) => {
  try {
    const data = await service.getById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error("Get Product By ID Error:", err);
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
exports.update = async (req, res) => {
  try {
    await service.update({ ...req.body, id: req.params.id });

    res.status(200).json({ message: "Product updated successfully" });
  } catch (err) {
    console.error("Update Product Error:", err);
    res.status(500).json({ message: err.message });
  }
};

// DELETE
exports.delete = async (req, res) => {
  try {
    await service.delete(req.params.id);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Delete Product Error:", err);
    res.status(500).json({ message: err.message });
  }
};

// GET PRICE RANGE (For Frontend Slider)
exports.getPriceRange = async (req, res) => {
  try {
    const query = `
        SELECT MIN(price) AS minPrice, MAX(price) AS maxPrice 
        FROM products 
        WHERE is_active = 1 AND is_delete = 0;
    `;
    
    const [results] = await db.query(query); 
    
    res.status(200).json({
      minPrice: results[0].minPrice || 0,
      maxPrice: results[0].maxPrice || 10000 
    });
  } catch (error) {
    console.error("Error fetching price range:", error);
    res.status(500).json({ message: "Failed to fetch price range" });
  }
};