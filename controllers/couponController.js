const service = require("../services/couponServices");

// CREATE
exports.createCoupon = async (req, res) => {
  try {
    const { code, type, value } = req.body;

    if (!code || !type || !value) {
      return res.status(400).json({
        message: "code, type and value are required"
      });
    }

    await service.createCoupon(req.body);

    res.status(201).json({
      message: "Coupon created successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create coupon",
      error: error.message
    });
  }
};

// GET
exports.getCoupons = async (req, res) => {
  try {
    const { id } = req.query;

    const data = await service.getCoupons({ id });

    res.status(200).json(data);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch coupons",
      error: error.message
    });
  }
};

// UPDATE
exports.updateCoupon = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "Coupon ID is required"
      });
    }

    await service.updateCoupon({ ...req.body, id });

    res.status(200).json({
      message: "Coupon updated successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update coupon",
      error: error.message
    });
  }
};

// DELETE
exports.deleteCoupon = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "Coupon ID is required"
      });
    }

    await service.deleteCoupon(id, req.body.updated_by);

    res.status(200).json({
      message: "Coupon deleted successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete coupon",
      error: error.message
    });
  }
};

// APPLY COUPON fbvjhfgbjkb
exports.applyCoupon = async (req, res) => {
  try {
    const { code, user_id, cart_amount } = req.body;

    if (!code || !user_id || !cart_amount) {
      return res.status(400).json({
        message: "code, user_id and cart_amount are required"
      });
    }

    const result = await service.applyCoupon(req.body);

    res.status(200).json({
      message: "Coupon applied successfully",
      data: result
    });

  } catch (error) {
    console.error(error);

    res.status(400).json({
      message: error.message
    });
  }
};