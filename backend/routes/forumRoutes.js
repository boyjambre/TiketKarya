// backend/routes/forumRoutes.js
const express = require("express");
const router = express.Router();
const forumController = require("../controllers/forumController");

router.route("/")
  .get(forumController.getForumTopics); // cite: 1 // Get all topics

router.route("/:id")
  .get(forumController.getForumTopicAndComments) // cite: 1 // Get specific topic with comments
  .delete(forumController.deleteForumTopic); // cite: 1 // Delete a topic

router.route("/:topicId/comments")
  .post(forumController.createForumComment); // cite: 1 // Add comment to a topic

router.route("/comments/:id")
  .delete(forumController.deleteForumComment); // cite: 1 // Delete a specific comment

module.exports = router;