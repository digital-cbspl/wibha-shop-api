const db = require("../config/db");

exports.callMenuSP = (params) => {
  // Updated to 11 placeholders to match your SP parameters
  return db.query(
    "CALL menu_crud(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      params.action,             // p_action (VARCHAR 15)
      params.id || null,         // p_id (INT)
      params.name || null,       // p_name (VARCHAR 255)
      params.slug || null,       // p_slug (VARCHAR 255)
      params.location || null,   // p_location (VARCHAR 50) - NEW
      params.parent_id || null,  // p_parent_id (INT)
      params.type || null,       // p_type (ENUM)
      params.url || null,        // p_url (VARCHAR 255)
      params.sort_order ?? 0,    // p_sort_order (INT)
      params.is_active ?? 1,     // p_is_active (TINYINT)
      params.is_delete ?? 0      // p_is_delete (TINYINT)
    ]
  );
};