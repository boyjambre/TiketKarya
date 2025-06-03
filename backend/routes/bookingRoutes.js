// backend/routes/bookingRoutes.js
const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.route("/")
  .get(bookingController.getBookings); // cite: 1

router.route("/:id")
  .get(bookingController.getBooking) // cite: 1
  .put(bookingController.updateBookingStatus); // cite: 1

module.exports = router;