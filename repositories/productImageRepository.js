const db = require("../config/db");

exports.callSP = (params) => {
  return db.query(
    "CALL ProductImageCRUD(?, ?, ?, ?)",
    [
      params.action,
      params.id || null,
      params.product_id || null,
      params.image_url || null
    ]
  );
};