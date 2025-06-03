// backend/controllers/forumController.js
const db = require("../config/db");

// Get all forum topics (for Forum List view)
exports.getForumTopics = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT ft.*, u.username as author_name,
             (SELECT COUNT(fc.id) FROM forum_comments fc WHERE fc.topic_id = ft.id) as comments_count
      FROM forum_topics ft
      JOIN users u ON ft.user_id = u.id
      ORDER BY ft.created_at DESC
    `); // cite: 1
    res.json(rows); // cite: 1
  } catch (err) {
    console.error("Error fetching forum topics:", err); // cite: 1
    res.status(500).json({ message: "Error fetching forum topics" }); // cite: 1
  }
};

// Get a single forum topic and its comments
exports.getForumTopicAndComments = async (req, res) => {
  const topicId = req.params.id; // cite: 1
  try {
    const [topicRows] = await db.query(`
      SELECT ft.*, u.username as author_name, u.email as author_email
      FROM forum_topics ft
      JOIN users u ON ft.user_id = u.id
      WHERE ft.id = ?
    `, [topicId]); // cite: 1

    if (topicRows.length === 0) {
      return res.status(404).json({ message: "Forum topic not found" }); // cite: 1
    }

    const [commentsRows] = await db.query(`
      SELECT fc.*, u.username as comment_author_name
      FROM forum_comments fc
      JOIN users u ON fc.user_id = u.id
      WHERE fc.topic_id = ?
      ORDER BY fc.created_at ASC
    `, [topicId]); // cite: 1

    res.json({
      topic: topicRows[0],
      comments: commentsRows,
    }); // cite: 1
  } catch (err) {
    console.error("Error fetching forum topic and comments:", err); // cite: 1
    res.status(500).json({ message: "Error fetching forum topic details" }); // cite: 1
  }
};

// Delete a forum topic (and its comments will cascade due to FK ON DELETE CASCADE)
exports.deleteForumTopic = async (req, res) => {
  const topicId = req.params.id; // cite: 1
  try {
    const [result] = await db.query("DELETE FROM forum_topics WHERE id = ?", [topicId]); // cite: 1

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Forum topic not found" }); // cite: 1
    }
    res.json({ message: "Forum topic deleted successfully" }); // cite: 1
  } catch (err) {
    console.error("Error deleting forum topic:", err); // cite: 1
    res.status(500).json({ message: "Error deleting forum topic" }); // cite: 1
  }
};

// Create a new forum comment
exports.createForumComment = async (req, res) => {
  const topicId = req.params.topicId; // cite: 1
  const { user_id, content } = req.body; // cite: 1

  try {
    const [result] = await db.query(
      "INSERT INTO forum_comments (topic_id, user_id, content) VALUES (?, ?, ?)", // cite: 1
      [topicId, user_id, content]
    );
    const [newComment] = await db.query("SELECT * FROM forum_comments WHERE id = ?", [result.insertId]); // cite: 1
    res.status(201).json(newComment[0]); // cite: 1
  } catch (err) {
    console.error("Error creating forum comment:", err); // cite: 1
    res.status(500).json({ message: "Error creating forum comment" }); // cite: 1
  }
};

// Delete a forum comment
exports.deleteForumComment = async (req, res) => {
  const commentId = req.params.id; // cite: 1
  try {
    const [result] = await db.query("DELETE FROM forum_comments WHERE id = ?", [commentId]); // cite: 1

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Forum comment not found" }); // cite: 1
    }
    res.json({ message: "Forum comment deleted successfully" }); // cite: 1
  } catch (err) {
    console.error("Error deleting forum comment:", err); // cite: 1
    res.status(500).json({ message: "Error deleting forum comment" }); // cite: 1
  }
};