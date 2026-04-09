const db = require("../config/db");

exports.callCategorySP = (params) => {
  return db.query(
    "CALL CategoryCRUD(?, ?, ?, ?, ?, ?)",
    [
      params.action,
      params.id || null,
      params.name || null,
      params.slug || null,
      params.created_by || null,
      params.updated_by || null
    ]
  );
};