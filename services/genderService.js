const repo = require("../repositories/genderRepository");

// CREATE
exports.createGender = async (data) => {
  const slug = data.name.toLowerCase().replace(/\s+/g, "-");

  return repo.callGenderSP({
    action: "CREATE",
    ...data,
    slug
  });
};

// GET ALL
exports.getGenders = async () => {
  const [rows] = await repo.callGenderSP({ action: "GET_ALL" });
  return rows[0];
};

// GET BY ID
exports.getGenderById = async (id) => {
  const [rows] = await repo.callGenderSP({
    action: "GET_BY_ID",
    id
  });
  return rows[0][0];
};

// UPDATE
// ✅ Correct
exports.updateGender = async (data) => {
  let payload = { ...data };
  
  if (payload.name) {
    if (typeof payload.name !== "string") payload.name = String(payload.name); // Safety cast
    payload.slug = payload.name.toLowerCase().replace(/\s+/g, "-");
  }

  return repo.callGenderSP({
    action: "UPDATE",
    ...payload
  });
};


// DELETE
exports.deleteGender = async (id) => {
  return repo.callGenderSP({
    action: "DELETE",
    id
  });
};