const repo = require("../repositories/productImageRepository");

// CREATE MULTIPLE
exports.create = async (product_id, files) => {
  for (let file of files) {
    await repo.callSP({
      action: "CREATE",
      product_id,
      image_url: file.path
    });
  }
};

// GET
exports.getByProduct = async (product_id) => {
  const [rows] = await repo.callSP({
    action: "GET_BY_PRODUCT",
    product_id
  });
  return rows[0];
};

// DELETE
exports.delete = async (id) => {
  return repo.callSP({
    action: "DELETE",
    id
  });
};