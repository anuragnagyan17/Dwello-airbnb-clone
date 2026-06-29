const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsyc.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewsController = require("../controllers/reviews.js");



//Reviews
//Post repite
router.post("/", validateReview, isLoggedIn, wrapAsync(reviewsController.createReview));

//delete review
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewsController.destroyReview));


module.exports = router;
