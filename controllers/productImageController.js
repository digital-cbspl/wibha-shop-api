const service = require("../services/productImageService");

const fs = require("fs");
const path = require("path");

// UPLOAD MULTIPLE IMAGES
exports.uploadImages = async (req, res) => {
  try {
    const product_id = req.body.product_id;

    if (!product_id) {
      return res.status(400).json({ message: "product_id required" });
    }

    await service.create(product_id, req.files);

    res.status(201).json({
      message: "Images uploaded successfully"
    });

  } catch (err) {
    res.status(500).json({
      message: "Upload failed",
      error: err.message
    });
  }
};

// GET IMAGES
exports.getImages = async (req, res) => {
  try {
    const data = await service.getByProduct(req.params.product_id);

    res.json(data);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE IMAGE
exports.deleteImage = async (req, res) => {
  try {
    const id = req.params.id;

    // 1. Get image path
    const image = await service.getImageById(id);

    if (!image) {
      return res.status(404).json({
        message: "Image not found"
      });
    }

    // 2. Delete file from folder
    const filePath = path.join(__dirname, "..", image.image_url);

    fs.unlink(filePath, (err) => {
      if (err) {
        console.log("File delete error:", err);
      }
    });

    // 3. Delete from DB
    await service.delete(id);

    res.json({
      message: "Image deleted from DB and folder"
    });

  } catch (err) {
    res.status(500).json({
      message: "Delete failed",
      error: err.message
    });
  }
};