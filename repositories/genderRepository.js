const db = require("../config/db");

exports.callGenderSP = (params) => {
  return db.query(
    "CALL GenderCRUD(?, ?, ?, ?, ?, ?)",
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