const db = require("../config/db");

exports.callWishlistSP = (params) => {
  return db.query(
    "CALL wishlist_crud(?, ?, ?, ?, ?, ?, ?)",
    [
      params.action,            // INSERT / UPDATE / DELETE / GET
      params.id || null,
      params.user_id || null,
      params.product_id || null,
      params.quantity ?? 1,
      params.price ?? null,
      params.created_by || null
    ]
  );
};