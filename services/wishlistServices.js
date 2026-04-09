const repo = require("../repositories/wishlistRepository");

// CREATE
exports.createWishlist = async (data) => {
  return repo.callWishlistSP({
    action: "INSERT",
    ...data
  });
};

// GET ALL / BY USER / BY ID
exports.getWishlist = async (params) => {
  const [rows] = await repo.callWishlistSP({
    action: "GET",
    ...params
  });

  return rows[0];
};

// UPDATE
exports.updateWishlist = async (data) => {
  return repo.callWishlistSP({
    action: "UPDATE",
    ...data
  });
};

// DELETE
exports.deleteWishlist = async (id) => {
  return repo.callWishlistSP({
    action: "DELETE",
    id
  });
};