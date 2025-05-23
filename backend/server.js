const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");
const workshopRoutes = require("./routes/workshopRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test database connection
async function testConnection() {
  try {
    await db.query("SELECT 1");
    console.log("MySQL Database Connected...");
  } catch (err) {
    console.error("MySQL Connection Error:", err);
  }
}

testConnection();

// Basic Routes
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to TiketKarya Application" });
});

// Mount Routes
app.use("/api/workshops", workshopRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
