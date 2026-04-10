const service = require("../services/addressService");

// CREATE
exports.createAddress = async (req, res) => {
  try {
    const { user_id, full_name, phone, address_line1 } = req.body;

    if (!user_id || !full_name || !phone || !address_line1) {
      return res.status(400).json({
        message: "user_id, full_name, phone, address_line1 are required"
      });
    }

    await service.createAddress(req.body);

    res.status(201).json({
      message: "Address added successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(400).json({
      message: error.message
    });
  }
};

// GET
exports.getAddress = async (req, res) => {
  try {
    const { id, user_id } = req.query;

    const data = await service.getAddress({ id, user_id });

    res.status(200).json(data);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch address",
      error: error.message
    });
  }
};

// UPDATE
exports.updateAddress = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "Address ID is required"
      });
    }

    await service.updateAddress({ ...req.body, id });

    res.status(200).json({
      message: "Address updated successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update address",
      error: error.message
    });
  }
};

// DELETE
exports.deleteAddress = async (req, res) => {
  try {
    const id = req.params.id;
    const { user_id, updated_by } = req.body;

    if (!id || !user_id) {
      return res.status(400).json({
        message: "id and user_id are required"
      });
    }

    await service.deleteAddress(id, user_id, updated_by);

    res.status(200).json({
      message: "Address deleted successfully"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete address",
      error: error.message
    });
  }
};

// SET DEFAULT
exports.setDefaultAddress = async (req, res) => {
  try {
    const id = req.params.id;
    const { user_id } = req.body;

    if (!id || !user_id) {
      return res.status(400).json({
        message: "id and user_id are required"
      });
    }

    await service.setDefaultAddress(id, user_id);

    res.status(200).json({
      message: "Default address updated"
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to set default address",
      error: error.message
    });
  }
};