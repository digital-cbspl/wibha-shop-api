const db = require("../config/db");

exports.callSP = (params) => {
  return db.query(
    "CALL VarietyCRUD(?, ?, ?, ?, ?, ?, ?)",
    [
      params.action,
      params.id || null,
      params.name || null,
      params.slug || null,
      params.material_id || null,
      params.created_by || null,
      params.updated_by || null
    ]
  );
};