const db = require("../config/db");

exports.callSP = (params) => {
  return db.query(
    "CALL OrdersCRUD(?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      params.action,
      params.id || null,
      params.user_id || null,
      params.address_id || null,
      params.order_no || null,
      params.total_items || 0,
      params.total_amount || 0,
      params.paid_amount || 0,
      params.due_amount || 0,
      params.status || null,
      params.payment_status || null,
      params.payment_method || null
    ]
  );
};