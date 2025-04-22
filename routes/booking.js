const listing = require('../models/listing'); 
const Booking = require('../models/booking'); 

const express = require('express');
const router = express.Router({mergeParams:true});//merging with parent params

const { isLoggedin, validatebooking } = require('../middleware');
const WrapAsync = require('../utils/WrapAsync');
const ExpressError = require("../utils/ExtendsError.js")
const { listingSchema ,bookingSchema} =require("../schema.js");
const bookingController = require("../controllers/booking.js");

router.get("/booking", isLoggedin,  WrapAsync(bookingController.getBook));
router.post("/", isLoggedin,validatebooking,  WrapAsync(bookingController.postBook));

 module.exports = router