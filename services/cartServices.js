const repo = require("../repositories/cartRepository");

// CREATE
exports.createCart = async (data) => {
  return repo.callCartSP({
    action: "INSERT",
    ...data
  });
};

// GET
exports.getCart = async (params) => {
  const [rows] = await repo.callCartSP({
    action: "GET",
    ...params
  });

  return rows[0];
};

// UPDATE
exports.updateCart = async (data) => {
  return repo.callCartSP({
    action: "UPDATE",
    ...data
  });
};

// DELETE
exports.deleteCart = async (id) => {
  return repo.callCartSP({
    action: "DELETE",
    id
  });
};