const repo = require("../repositories/orderRepository");

// CREATE
exports.create = async (data) => {
  return repo.callSP({
    action: "CREATE",
    ...data
  });
};

// GET ALL
exports.getAll = async () => {
  const [rows] = await repo.callSP({ action: "GET_ALL" });
  return rows[0];
};

// GET BY ID
exports.getById = async (id) => {
  const [rows] = await repo.callSP({
    action: "GET_BY_ID",
    id
  });
  return rows[0][0];
};

// UPDATE
exports.update = async (data) => {
  return repo.callSP({
    action: "UPDATE",
    ...data
  });
};

// DELETE
exports.delete = async (id) => {
  return repo.callSP({
    action: "DELETE",
    id
  });
};