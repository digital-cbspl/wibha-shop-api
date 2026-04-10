const repo = require("../repositories/addressRepository");

// CREATE
exports.createAddress = async (data) => {
  return repo.callAddressSP({
    action: "INSERT",
    ...data
  });
};

// GET
exports.getAddress = async (params) => {
  const [rows] = await repo.callAddressSP({
    action: "GET",
    ...params
  });

  return rows[0];
};

// UPDATE
exports.updateAddress = async (data) => {
  return repo.callAddressSP({
    action: "UPDATE",
    ...data
  });
};

// DELETE
exports.deleteAddress = async (id, user_id, updated_by) => {
  return repo.callAddressSP({
    action: "DELETE",
    id,
    user_id,
    updated_by
  });
};

// SET DEFAULT
exports.setDefaultAddress = async (id, user_id) => {
  return repo.callAddressSP({
    action: "SET_DEFAULT",
    id,
    user_id
  });
};