// backend/controllers/refundController.js
const db = require("../config/db");

// Get all refund requests (for Refund Request list view)
exports.getRefundRequests = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT rr.*, b.id as booking_id, w.title as workshop_title, u.username as user_name,
             pba.username as processed_by_admin_name
      FROM refund_requests rr
      JOIN bookings b ON rr.booking_id = b.id
      JOIN workshops w ON b.workshop_id = w.id
      JOIN users u ON rr.user_id = u.id
      LEFT JOIN users pba ON rr.processed_by_admin_id = pba.id
      ORDER BY rr.request_date DESC
    `); // cite: 1
    res.json(rows); // cite: 1
  } catch (err) {
    console.error("Error fetching refund requests:", err); // cite: 1
    res.status(500).json({ message: "Error fetching refund requests" }); // cite: 1
  }
};

// Get a single refund request
exports.getRefundRequest = async (req, res) => {
  const requestId = req.params.id; // cite: 1
  try {
    const [rows] = await db.query(`
      SELECT rr.*, b.id as booking_id, b.booking_date, b.status as booking_status, b.payment_status as booking_payment_status,
             w.title as workshop_title, w.price as workshop_price,
             u.username as user_name, u.email as user_email,
             pba.username as processed_by_admin_name
      FROM refund_requests rr
      JOIN bookings b ON rr.booking_id = b.id
      JOIN workshops w ON b.workshop_id = w.id
      JOIN users u ON rr.user_id = u.id
      LEFT JOIN users pba ON rr.processed_by_admin_id = pba.id
      WHERE rr.id = ?
    `, [requestId]); // cite: 1

    if (rows.length === 0) {
      return res.status(404).json({ message: "Refund request not found" }); // cite: 1
    }
    res.json(rows[0]); // cite: 1
  } catch (err) {
    console.error("Error fetching single refund request:", err); // cite: 1
    res.status(500).json({ message: "Error fetching refund request details" }); // cite: 1
  }
};

// Process (Approve/Reject) a refund request
exports.processRefundRequest = async (req, res) => {
  const requestId = req.params.id; // cite: 1
  const { status, admin_notes, processed_by_admin_id } = req.body; // status: 'approved' or 'rejected' // cite: 1

  if (!['approved', 'rejected'].includes(status)) {
    return res.status(400).json({ message: "Invalid status provided" }); // cite: 1
  }
  // In a real app, processed_by_admin_id should come from authenticated user session
  if (!processed_by_admin_id) {
    return res.status(400).json({ message: "Admin ID is required for processing" }); // cite: 1
  }

  const connection = await db.getConnection(); // Use a transaction for consistency
  try {
    await connection.beginTransaction(); // cite: 1

    // Update refund request status
    const [requestResult] = await connection.query(
      "UPDATE refund_requests SET status = ?, admin_notes = ?, processed_by_admin_id = ?, processed_date = NOW() WHERE id = ?", // cite: 1
      [status, admin_notes, processed_by_admin_id, requestId]
    );

    if (requestResult.affectedRows === 0) {
      await connection.rollback(); // cite: 1
      return res.status(404).json({ message: "Refund request not found" }); // cite: 1
    }

    // If approved, update associated booking payment status to 'refunded'
    if (status === 'approved') {
      const [requestRows] = await connection.query("SELECT booking_id FROM refund_requests WHERE id = ?", [requestId]); // cite: 1
      const bookingId = requestRows[0].booking_id; // cite: 1
      await connection.query("UPDATE bookings SET payment_status = 'refunded' WHERE id = ?", [bookingId]); // cite: 1
    }

    await connection.commit(); // cite: 1
    res.json({ message: `Refund request ${status} successfully` }); // cite: 1

  } catch (err) {
    await connection.rollback(); // cite: 1
    console.error("Error processing refund request:", err); // cite: 1
    res.status(500).json({ message: "Error processing refund request" }); // cite: 1
  } finally {
    connection.release(); // cite: 1
  }
};