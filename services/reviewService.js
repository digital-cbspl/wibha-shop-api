const repo = require("../repositories/reviewRepository");

// CREATE
exports.createReview = async (data) => {
  return repo.callReviewSP({
    action: "INSERT",
    ...data
  });
};

// GET
exports.getReviews = async (params) => {
  const [rows] = await repo.callReviewSP({
    action: "GET",
    ...params
  });

  return rows[0];
};

// UPDATE
exports.updateReview = async (data) => {
  return repo.callReviewSP({
    action: "UPDATE",
    ...data
  });
};

// DELETE
exports.deleteReview = async (id) => {
  return repo.callReviewSP({
    action: "DELETE",
    id
  });
};