const express = require("express");
const router = express.Router();
const {
  getWorkshops,
  getWorkshop,
  createWorkshop,
  updateWorkshop,
  deleteWorkshop,
  getAllWorkshopsAdmin // NEW
} = require("../controllers/workshopController");

// Route: /api/workshops
router.route("/").get(getWorkshops).post(createWorkshop);

// NEW: Route for Admin to get all workshops (no status filter)
router.get("/admin/all", getAllWorkshopsAdmin); // cite: 1

// Route: /api/workshops/:id
router
  .route("/:id")
  .get(getWorkshop)
  .put(updateWorkshop)
  .delete(deleteWorkshop);

  module.exports = router;