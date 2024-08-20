const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing}= require("../middleware.js");
const path = require("path");
const listingController = require("../controllers/listing.js");
const multer = require('multer'); //npm package for image upload
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

router.route("/")
    .get(wrapAsync(listingController.index)) // index route
    .post(isLoggedIn,
        upload.single('listing[image]'),
        validateListing, 
        wrapAsync(listingController.createListing)); //create route

//new route.
router.get("/new",isLoggedIn,listingController.renderNewForm);

//search route
router.post("/search",listingController.search);

//features route
router.get("/filter",listingController.category);



router.route("/:id")
    .get(wrapAsync(listingController.showListing)) //show listing
    .put(isLoggedIn,isOwner,
        upload.single("listing[image]"),validateListing,wrapAsync(listingController.updateListing)) //update listing
    .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing)); //delete listing


//edit route.
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));



module.exports = router;
