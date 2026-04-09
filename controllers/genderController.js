const service = require("../services/genderService");

// CREATE
exports.createGender = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    await service.createGender(req.body);

    res.status(201).json({ message: "Gender created successfully" });

  } catch (error) {
    res.status(500).json({
      message: "Failed to create gender",
      error: error.message
    });
  }
};

// GET ALL
exports.getGenders = async (req, res) => {
  try {
    res.json(await service.getGenders());
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch genders",
      error: error.message
    });
  }
};

// GET BY ID
exports.getGenderById = async (req, res) => {
  try {
    const data = await service.getGenderById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Gender not found" });
    }

    res.json(data);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch gender",
      error: error.message
    });
  }
};

// UPDATE
exports.updateGender = async (req, res) => {
  try {
    await service.updateGender({ ...req.body, id: req.params.id });

    res.json({ message: "Gender updated successfully" });

  } catch (error) {
    res.status(500).json({
      message: "Failed to update gender",
      error: error.message
    });
  }
};

// DELETE
exports.deleteGender = async (req, res) => {
  try {
    await service.deleteGender(req.params.id);

    res.json({ message: "Gender deleted successfully" });

  } catch (error) {
    res.status(500).json({
      message: "Failed to delete gender",
      error: error.message
    });
  }
};