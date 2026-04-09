const db = require("../config/db");

exports.callCartSP = (params) => {
  return db.query(
    "CALL cart_crud(?, ?, ?, ?, ?, ?, ?)",
    [
      params.action,
      params.id || null,
      params.user_id || null,
      params.product_id || null,
      params.quantity ?? 1,
      params.price ?? null,
      params.created_by || null
    ]
  );
};