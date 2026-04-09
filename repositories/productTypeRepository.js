const db = require("../config/db");

exports.callSP = (params) => {
  return db.query(
    "CALL ProductTypeCRUD(?, ?, ?, ?, ?, ?, ?)",
    [
      params.action,
      params.id || null,
      params.name || null,
      params.slug || null,
      params.category_id || null,
      params.created_by || null,
      params.updated_by || null
    ]
  );
};