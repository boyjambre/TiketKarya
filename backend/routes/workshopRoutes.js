const express = require("express");
const router = express.Router();
const {
  getWorkshops,
  getWorkshop,
  createWorkshop,
  updateWorkshop,
  deleteWorkshop,
} = require("../controllers/workshopController");

// Route: /api/workshops
router.route("/").get(getWorkshops).post(createWorkshop);

// Route: /api/workshops/:id
router
  .route("/:id")
  .get(getWorkshop)
  .put(updateWorkshop)
  .delete(deleteWorkshop);

module.exports = router;
