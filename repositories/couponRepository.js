const db = require("../config/db");

exports.callCouponSP = (params) => {
  return db.query(
    "CALL coupon_crud(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      params.action,               // INSERT / UPDATE / DELETE / GET / APPLY
      params.id || null,
      params.code || null,
      params.type || null,
      params.value ?? null,
      params.min_cart_amount ?? 0,
      params.max_discount ?? null,
      params.usage_limit ?? null,
      params.per_user_limit ?? 1,
      params.start_date || null,
      params.end_date || null,
      params.user_id || null,
      params.cart_amount ?? null,
      params.created_by || null,
      params.updated_by || null
    ]
  );
};