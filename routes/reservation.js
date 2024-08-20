const express = require("express");
const router = express.Router({mergeParams:false});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js");
const reservationController = require("../controllers/reservation.js");
const { createListing } = require("../controllers/listing.js");

//reservation create route
router.post("/createReservation",isLoggedIn,wrapAsync(reservationController.createReservation));

//reservation show route
router.get("/showReservation",isLoggedIn,wrapAsync(reservationController.showReservation));
    
//review delete route
router.delete("/destroyReservation/:id",isLoggedIn,wrapAsync(reservationController.destroyReservation));

module.exports = router;    
