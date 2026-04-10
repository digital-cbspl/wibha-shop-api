const db = require("../config/db");

exports.callSP = (params) => {
  return db.query(
    "CALL OrderItemsCRUD(?,?,?,?,?,?,?,?,?,?,?)",
    [
      params.action,
      params.id || null,
      params.order_id || null,
      params.product_id || null,
      params.quantity || 0,
      params.price || 0,
      params.status || "pending",
      params.cancelled_qty || 0,
      params.returned_qty || 0,
      params.shipped_qty || 0,
      params.delivered_qty || 0
    ]
  );
};