const db = require("../config/db");

exports.callMenuSP = (params) => {
  return db.query(
    "CALL menu_crud(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      params.action,          // INSERT / UPDATE / DELETE / GET
      params.id || null,
      params.name || null,
      params.slug || null,
      params.parent_id || null,
      params.type || null,
      params.url || null,
      params.sort_order ?? 0,
      params.is_active ?? 1,
      params.is_delete ?? 0
    ]
  );
};