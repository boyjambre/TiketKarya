const db = require("../config/db");

// Get all workshops
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
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching workshops" });
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
    );

    if (!rows.length) {
      return res.status(404).json({ message: "Workshop not found" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching workshop" });
  }
};

// Create workshop
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
    } = req.body;

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
    );

    const [newWorkshop] = await db.query(
      "SELECT * FROM workshops WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json(newWorkshop[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating workshop" });
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
    } = req.body;

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
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Workshop not found" });
    }

    const [updatedWorkshop] = await db.query(
      "SELECT * FROM workshops WHERE id = ?",
      [req.params.id]
    );

    res.json(updatedWorkshop[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating workshop" });
  }
};

// Delete workshop
exports.deleteWorkshop = async (req, res) => {
  try {
    const [result] = await db.query("DELETE FROM workshops WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Workshop not found" });
    }

    res.json({ message: "Workshop deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting workshop" });
  }
};
