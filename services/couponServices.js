const repo = require("../repositories/couponRepository");

// CREATE
exports.createCoupon = async (data) => {
  return repo.callCouponSP({
    action: "INSERT",
    ...data
  });
};

// GET
exports.getCoupons = async (params) => {
  const [rows] = await repo.callCouponSP({
    action: "GET",
    ...params
  });

  return rows[0];
};

// UPDATE
exports.updateCoupon = async (data) => {
  return repo.callCouponSP({
    action: "UPDATE",
    ...data
  });
};

// DELETE (Soft Delete)
exports.deleteCoupon = async (id, updated_by) => {
  return repo.callCouponSP({
    action: "DELETE",
    id,
    updated_by
  });
};

// APPLY COUPON
exports.applyCoupon = async (data) => {
  const [rows] = await repo.callCouponSP({
    action: "APPLY",
    ...data
  });

  return rows[0][0]; // single result
};