const db = require("../config/db");

exports.callAddressSP = (params) => {
  return db.query(
    "CALL address_crud(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      params.action,
      params.id || null,
      params.user_id || null,
      params.full_name || null,
      params.phone || null,
      params.alt_phone || null,
      params.address_line1 || null,
      params.address_line2 || null,
      params.city || null,
      params.state || null,
      params.postal_code || null,
      params.country || null,
      params.is_default ?? null,
      params.created_by || null,
      params.updated_by || null
    ]
  );
};