const repo = require("../repositories/categoryRepository");

// CREATE
exports.createCategory = async (data) => {
  let nameStr = typeof data.name === "string" ? data.name : String(data.name);
  const slug = nameStr.toLowerCase().replace(/\s+/g, "-");

  return repo.callCategorySP({
    action: "CREATE",
    ...data,
    slug
  });
};

// GET ALL
exports.getCategories = async () => {
  const [rows] = await repo.callCategorySP({ action: "GET_ALL" });
  return rows[0];
};

// GET BY ID
exports.getCategoryById = async (id) => {
  const [rows] = await repo.callCategorySP({
    action: "GET_BY_ID",
    id
  });
  return rows[0][0];
};

// UPDATE
exports.updateCategory = async (data) => {
  let payload = { ...data };
  
  if (payload.name) {
    let nameStr = typeof payload.name === "string" ? payload.name : String(payload.name);
    payload.slug = nameStr.toLowerCase().replace(/\s+/g, "-");
  }

  return repo.callCategorySP({
    action: "UPDATE",
    ...payload
  });
};

// DELETE
exports.deleteCategory = async (id, updated_by) => {
  return repo.callCategorySP({
    action: "DELETE",
    id,
    updated_by
  });
};