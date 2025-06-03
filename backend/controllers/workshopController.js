// backend/controllers/workshopController.js
const db = require("../config/db");

// Get all workshops for general users (still filters by 'upcoming')
exports.getWorkshops = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT w.*, c.name as category_name,
             u.username as instructor_name,
             COUNT(b.id) as booking_count
      FROM workshops w
      LEFT JOIN categories c ON w.category_id = c.id
      LEFT JOIN users u ON w.instructor_id = u.id
      LEFT JOIN bookings b ON w.id = b.workshop_id
      WHERE w.status = 'upcoming'
      GROUP BY w.id
      ORDER BY w.date ASC
    `); // cite: 1
    res.json(rows); // cite: 1
  } catch (err) {
    console.error(err); // cite: 1
    res.status(500).json({ message: "Error fetching workshops" }); // cite: 1
  }
};

// NEW: Get all workshops for admin view (no status filter)
exports.getAllWorkshopsAdmin = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT w.*, c.name as category_name,
             u.username as instructor_name,
             COUNT(b.id) as booking_count
      FROM workshops w
      LEFT JOIN categories c ON w.category_id = c.id
      LEFT JOIN users u ON w.instructor_id = u.id
      LEFT JOIN bookings b ON w.id = b.workshop_id
      GROUP BY w.id
      ORDER BY w.created_at DESC
    `); // cite: 1
    res.json(rows); // cite: 1
  } catch (err) {
    console.error(err); // cite: 1
    res.status(500).json({ message: "Error fetching all workshops for admin" }); // cite: 1
  }
};


// Get single workshop
exports.getWorkshop = async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT w.*, c.name as category_name,
              u.username as instructor_name,
              COUNT(b.id) as booking_count
       FROM workshops w
       LEFT JOIN categories c ON w.category_id = c.id
       LEFT JOIN users u ON w.instructor_id = u.id
       LEFT JOIN bookings b ON w.id = b.workshop_id
       WHERE w.id = ?
       GROUP BY w.id`,
      [req.params.id]
    ); // cite: 1

    if (!rows.length) {
      return res.status(404).json({ message: "Workshop not found" }); // cite: 1
    }

    res.json(rows[0]); // cite: 1
  } catch (err) {
    console.error(err); // cite: 1
    res.status(500).json({ message: "Error fetching workshop" }); // cite: 1
  }
};

// Create workshop (used by organizers after submission is approved, or directly by admin)
exports.createWorkshop = async (req, res) => {
  try {
    const {
      title,
      description,
      category_id,
      instructor_id,
      price,
      location,
      date,
      time,
      max_participants,
      image_url,
    } = req.body; // cite: 1

    const [result] = await db.query(
      `INSERT INTO workshops
       (title, description, category_id, instructor_id, price,
        location, date, time, max_participants, image_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        description,
        category_id,
        instructor_id,
        price,
        location,
        date,
        time,
        max_participants,
        image_url,
      ]
    ); // cite: 1

    const [newWorkshop] = await db.query(
      "SELECT * FROM workshops WHERE id = ?",
      [result.insertId]
    ); // cite: 1

    res.status(201).json(newWorkshop[0]); // cite: 1
  } catch (err) {
    console.error(err); // cite: 1
    res.status(500).json({ message: "Error creating workshop" }); // cite: 1
  }
};

// Update workshop
exports.updateWorkshop = async (req, res) => {
  try {
    const {
      title,
      description,
      category_id,
      price,
      location,
      date,
      time,
      max_participants,
      image_url,
      status,
    } = req.body; // cite: 1

    const [result] = await db.query(
      `UPDATE workshops
       SET title = ?, description = ?, category_id = ?,
           price = ?, location = ?, date = ?, time = ?,
           max_participants = ?, image_url = ?, status = ?
       WHERE id = ?`,
      [
        title,
        description,
        category_id,
        price,
        location,
        date,
        time,
        max_participants,
        image_url,
        status,
        req.params.id,
      ]
    ); // cite: 1

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Workshop not found" }); // cite: 1
    }

    const [updatedWorkshop] = await db.query(
      "SELECT * FROM workshops WHERE id = ?",
      [req.params.id]
    ); // cite: 1

    res.json(updatedWorkshop[0]); // cite: 1
  } catch (err) {
    console.error(err); // cite: 1
    res.status(500).json({ message: "Error updating workshop" }); // cite: 1
  }
};

// Delete workshop
exports.deleteWorkshop = async (req, res) => {
  try {
    const [result] = await db.query("DELETE FROM workshops WHERE id = ?", [
      req.params.id,
    ]); // cite: 1

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Workshop not found" }); // cite: 1
    }

    res.json({ message: "Workshop deleted successfully" }); // cite: 1
  } catch (err) {
    console.error(err); // cite: 1
    res.status(500).json({ message: "Error deleting workshop" }); // cite: 1
  } };