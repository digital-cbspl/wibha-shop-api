const service = require("../services/wishlistServices");

// CREATE
exports.createWishlist = async (req, res) => {
  try {
    const { user_id, product_id } = req.body;

    if (!user_id || !product_id) {
      return res.status(400).json({
        message: "user_id and product_id are required"
      });
    }

    await service.createWishlist(req.body);

    res.status(201).json({
      message: "Added to wishlist successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message || "Failed to add wishlist",
    });
  }
};

// GET
exports.getWishlist = async (req, res) => {
  try {
    const { user_id, id } = req.query;

    const data = await service.getWishlist({ user_id, id });

    res.status(200).json(data);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch wishlist",
      error: error.message
    });
  }
};

// UPDATE
exports.updateWishlist = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "Wishlist ID is required"
      });
    }

    await service.updateWishlist({ ...req.body, id });

    res.status(200).json({
      message: "Wishlist updated successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update wishlist",
      error: error.message
    });
  }
};

// DELETE
exports.deleteWishlist = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "Wishlist ID is required"
      });
    }

    await service.deleteWishlist(id);

    res.status(200).json({
      message: "Wishlist deleted successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete wishlist",
      error: error.message
    });
  }
};