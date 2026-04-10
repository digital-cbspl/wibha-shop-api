const repo = require("../repositories/userRepository");
const bcrypt = require("bcrypt");

// CREATE
exports.createUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  return repo.callUserSP({
    action: "CREATE",
    ...data,
    password: hashedPassword
  });
};

// GET ALL
exports.getUsers = async () => {
  const [rows] = await repo.callUserSP({ action: "GET_ALL" });
  return rows[0];
};

// GET BY ID
exports.getUserById = async (id) => {
  const [rows] = await repo.callUserSP({
    action: "GET_BY_ID",
    id
  });
  return rows[0][0];
};

// UPDATE
// ✅ Correct
exports.updateUser = async (data) => {
  let payload = { ...data };
  if (payload.password) {
    payload.password = await bcrypt.hash(payload.password, 10);
  }
  
  return repo.callUserSP({
    action: "UPDATE",
    ...payload
  });
};


// DELETE
exports.deleteUser = async (id, updated_by) => {
  return repo.callUserSP({
    action: "DELETE",
    id,
    updated_by
  });
};