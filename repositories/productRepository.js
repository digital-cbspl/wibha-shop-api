const db = require("../config/db");

exports.callSP = (params) => {
  return db.query(
    "CALL ProductCRUD(?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      params.action,
      params.id || null,
      params.name || null,
      params.slug || null,
      params.category_id || null,
      params.product_type_id || null,
      params.material_id || null,
      params.variety_id || null,
      params.gender_id || null,
      params.price || null,
      params.search || null,
      params.page || 1,
      params.limit || 10
    ]
  );
};