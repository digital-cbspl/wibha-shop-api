const repo = require("../repositories/productRepository");

// CREATE
exports.create = async (data) => {
  let nameStr = typeof data.name === "string" ? data.name : String(data.name);
  const slug = nameStr.toLowerCase().replace(/\s+/g, "-");

  return repo.callSP({
    action: "CREATE",
    ...data,
    slug
  });
};

// GET ALL (FILTER + PAGINATION)
exports.getAll = async (query) => {
  const [rows] = await repo.callSP({
    action: "GET_ALL",
    ...query
  });

  return rows[0];
};

// GET BY ID
exports.getById = async (id) => {
  const [rows] = await repo.callSP({ action: "GET_BY_ID", id });
  return rows[0][0];
};

// UPDATE
exports.update = async (data) => {
  let payload = { ...data };
  
  if (payload.name) {
    let nameStr = typeof payload.name === "string" ? payload.name : String(payload.name);
    payload.slug = nameStr.toLowerCase().replace(/\s+/g, "-");
  }

  return repo.callSP({
    action: "UPDATE",
    ...payload
  });
};

// DELETE
exports.delete = async (id) => {
  return repo.callSP({ action: "DELETE", id });
};  