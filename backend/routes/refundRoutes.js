// backend/routes/refundRoutes.js
const express = require("express");
const router = express.Router();
const refundController = require("../controllers/refundController");

router.route("/")
  .get(refundController.getRefundRequests); // cite: 1

router.route("/:id")
  .get(refundController.getRefundRequest) // cite: 1
  .put(refundController.processRefundRequest); // cite: 1

module.exports = router;