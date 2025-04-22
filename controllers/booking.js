
const Listing = require("../models/listing");
const Booking = require("../models/booking");

module.exports.getBook = async (req, res) => {
   let listing = await Listing.findById(req.params.id);
   console.log(req.params.id);
    console.log(listing);
    // res.render("listings/booking.ejs", { listing ,booking:{}}); 
    res.render("listings/booking.ejs", { listing,booking:{} });
};

module.exports.postBook = async (req, res) => {
    let {id}=req.params;
    console.log(req.body);
    let listing = await Listing.findById(id);
    const newBooking = new Booking(req.body.booking);
    // newBooking.owner = req.user._id; 
    listing.bookings.push(newBooking); 
    console.log(newBooking);
    await newBooking.save();
    await listing.save();
    listing.available = false;
     req.flash("success", "Booking Successful");
    res.redirect(`/listing/${listing._id}`);
};