const db = require("../config/db");

exports.callUserSP = (params) => {
  return db.query(
    "CALL UserCRUD(?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      params.action,
      params.id || null,
      params.name || null,
      params.phone || null,
      params.email || null,
      params.password || null,
      params.role || null,
      params.created_by || null,
      params.updated_by || null
    ]
  );
};