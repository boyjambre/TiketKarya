// backend/controllers/bookingController.js
const db = require("../config/db");

// Get all bookings (for Order Request list view)
exports.getBookings = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT b.*, w.title as workshop_title, u.username as user_name,
             w.price as workshop_price
      FROM bookings b
      JOIN workshops w ON b.workshop_id = w.id
      JOIN users u ON b.user_id = u.id
      ORDER BY b.booking_date DESC
    `); // cite: 1
    res.json(rows); // cite: 1
  } catch (err) {
    console.error("Error fetching bookings:", err); // cite: 1
    res.status(500).json({ message: "Error fetching bookings" }); // cite: 1
  }
};

// Get a single booking
exports.getBooking = async (req, res) => {
  const bookingId = req.params.id; // cite: 1
  try {
    const [rows] = await db.query(`
      SELECT b.*, w.title as workshop_title, w.description as workshop_description,
             w.price as workshop_price, w.location as workshop_location,
             w.date as workshop_date, w.time as workshop_time,
             u.username as user_name, u.email as user_email
      FROM bookings b
      JOIN workshops w ON b.workshop_id = w.id
      JOIN users u ON b.user_id = u.id
      WHERE b.id = ?
    `, [bookingId]); // cite: 1

    if (rows.length === 0) {
      return res.status(404).json({ message: "Booking not found" }); // cite: 1
    }
    res.json(rows[0]); // cite: 1
  } catch (err) {
    console.error("Error fetching single booking:", err); // cite: 1
    res.status(500).json({ message: "Error fetching booking details" }); // cite: 1
  }
};

// Update booking status (e.g., from pending to confirmed/cancelled, or payment status)
exports.updateBookingStatus = async (req, res) => {
  const bookingId = req.params.id; // cite: 1
  const { status, payment_status } = req.body; // cite: 1

  try {
    let updateFields = [];
    let updateValues = [];

    if (status) {
      if (!['pending', 'confirmed', 'cancelled'].includes(status)) {
        return res.status(400).json({ message: "Invalid booking status" }); // cite: 1
      }
      updateFields.push("status = ?");
      updateValues.push(status);
    }
    if (payment_status) {
      if (!['pending', 'paid', 'refunded'].includes(payment_status)) {
        return res.status(400).json({ message: "Invalid payment status" }); // cite: 1
      }
      updateFields.push("payment_status = ?");
      updateValues.push(payment_status);
    }

    if (updateFields.length === 0) {
      return res.status(400).json({ message: "No update fields provided" }); // cite: 1
    }

    const query = `UPDATE bookings SET ${updateFields.join(", ")} WHERE id = ?`; // cite: 1
    const [result] = await db.query(query, [...updateValues, bookingId]); // cite: 1

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Booking not found or no changes made" }); // cite: 1
    }

    res.json({ message: "Booking updated successfully" }); // cite: 1
  } catch (err) {
    console.error("Error updating booking status:", err); // cite: 1
    res.status(500).json({ message: "Error updating booking status" }); // cite: 1
  }
};