const service = require("../services/cartServices");

// CREATE
exports.createCart = async (req, res) => {
  try {
    const { user_id, product_id } = req.body;

    if (!user_id || !product_id) {
      return res.status(400).json({
        message: "user_id and product_id are required"
      });
    }

    await service.createCart(req.body);

    res.status(201).json({
      message: "Product added to cart"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to add to cart",
      error: error.message
    });
  }
};

// GET
exports.getCart = async (req, res) => {
  try {
    const { user_id, id } = req.query;

    const data = await service.getCart({ user_id, id });

    res.status(200).json(data);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch cart",
      error: error.message
    });
  }
};

// UPDATE
exports.updateCart = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "Cart ID is required"
      });
    }

    await service.updateCart({ ...req.body, id });

    res.status(200).json({
      message: "Cart updated successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update cart",
      error: error.message
    });
  }
};

// DELETE
exports.deleteCart = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "Cart ID is required"
      });
    }

    await service.deleteCart(id);

    res.status(200).json({
      message: "Cart item removed"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete cart",
      error: error.message
    });
  }
};