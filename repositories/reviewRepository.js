const db = require("../config/db");

exports.callReviewSP = (params) => {
  return db.query(
    "CALL review_crud(?, ?, ?, ?, ?, ?, ?)",
    [
      params.action,
      params.id || null,
      params.user_id || null,
      params.product_id || null,
      params.rating ?? null,
      params.review || null,
      params.created_by || null
    ]
  );
};

