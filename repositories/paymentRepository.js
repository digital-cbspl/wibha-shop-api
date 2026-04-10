const db = require("../config/db");

exports.callSP = (params) => {
  return db.query(
    "CALL PaymentsCRUD(?,?,?,?,?,?,?,?,?,?)",
    [
      params.action,
      params.id || null,
      params.order_id || null,
      params.payment_id || null,
      params.transaction_id || null,
      params.amount || 0,
      params.payment_method || "UPI",
      params.type || "payment",
      params.status || "pending",
      params.gateway_response || null
    ]
  );
};