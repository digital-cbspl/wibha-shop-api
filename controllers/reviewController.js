const service = require("../services/reviewService");

// CREATE
exports.createReview = async (req, res) => {
  try {
    const { user_id, product_id, rating } = req.body;

    if (!user_id || !product_id || !rating) {
      return res.status(400).json({
        message: "user_id, product_id and rating are required"
      });
    }

    await service.createReview(req.body);

    res.status(201).json({
      message: "Review added successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(400).json({
      message: error.message
    });
  }
};

// GET
exports.getReviews = async (req, res) => {
  try {
    const { id, user_id, product_id } = req.query;

    const data = await service.getReviews({
      id,
      user_id,
      product_id
    });

    res.status(200).json(data);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch reviews",
      error: error.message
    });
  }
};

// UPDATE
exports.updateReview = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "Review ID is required"
      });
    }

    await service.updateReview({ ...req.body, id });

    res.status(200).json({
      message: "Review updated successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update review",
      error: error.message
    });
  }
};

// DELETE
exports.deleteReview = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "Review ID is required"
      });
    }

    await service.deleteReview(id);

    res.status(200).json({
      message: "Review deleted successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete review",
      error: error.message
    });
  }
};