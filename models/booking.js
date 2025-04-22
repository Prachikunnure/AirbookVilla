//  const mongoose = require('mongoose');

// const bookingSchema = new mongoose.Schema({
//     user:
//      {
//          type: mongoose.Schema.Types.ObjectId,
//          ref: "user",
//           required: true },
 
//     bookingDate:
//      { 
//         type :Date,
//         default : Date.now(),
//         required:true
//     },
//     duration://days
//      { 
//         type: Number, 
//         required: true 
//     }, 
// });

// const Booking = mongoose.model('Booking', bookingSchema);
// module.exports = Booking;

const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference User model
        required: true,
        index: true, // Improve query efficiency
    },
    bookingDate: {
        type: Date,
        default: () => Date.now(), // Dynamic default
        required: true,
    },
    duration: {
        type: Number,
        required: true,
        min: 1, // At least 1 day
        validate: {
            validator: Number.isInteger, // Only integer values allowed
            message: "{VALUE} is not a valid number of days",
        },
    },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;