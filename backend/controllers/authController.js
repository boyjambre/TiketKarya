// backend/controllers/authController.js
const db = require("../config/db"); // Menggunakan db.js yang sudah Anda buat
const bcrypt = require("bcryptjs"); // Untuk hashing password

// Login User (general login, can be used for regular users and organizers)
exports.loginUser = async (req, res) => {
  const { username, password } = req.body; // Menggunakan 'username' dari frontend Login.jsx

  try {
    // Mencari pengguna berdasarkan username atau email
    const [rows] = await db.query(
      "SELECT * FROM users WHERE username = ? OR email = ?",
      [username, username]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password); // Membandingkan password dari request dengan hashed password di DB

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Login berhasil
    // Di aplikasi nyata, Anda akan membuat dan mengirim JWT di sini
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
};

// Admin Login (assuming admins have 'admin' role in 'users' table, or a separate 'admins' table)
// Jika Anda memiliki tabel 'admins' terpisah seperti di contoh sebelumnya, Anda perlu menyesuaikan query ini.
// Untuk konsistensi dengan database.sql yang baru, saya akan mengasumsikan admin ada di tabel 'users' dengan 'role = admin'.
exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await db.query(
      "SELECT * FROM users WHERE (username = ? OR email = ?) AND role = 'admin'",
      [username, username]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid admin credentials" });
    }

    const adminUser = rows[0];
    const isPasswordValid = await bcrypt.compare(password, adminUser.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid admin credentials" });
    }

    res.status(200).json({
      message: "Admin login successful",
      admin: {
        id: adminUser.id,
        username: adminUser.username,
        email: adminUser.email,
        role: adminUser.role,
      },
    });
  } catch (err) {
    console.error("Admin login error:", err);
    res.status(500).json({ message: "Server error during admin login" });
  }
};

// Register User
exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Periksa apakah email sudah terdaftar
    const [existingUsers] = await db.query("SELECT id FROM users WHERE email = ?", [email]);
    if (existingUsers.length > 0) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Menentukan username (bisa kombinasi nama depan dan belakang atau hanya nama depan)
    // Untuk demo, kita bisa gunakan firstName sebagai username.
    const username = firstName.toLowerCase() + (lastName ? '.' + lastName.toLowerCase() : '');

    // Masukkan pengguna baru ke database
    await db.query(
      "INSERT INTO users (username, first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?, ?)",
      [username, firstName, lastName || null, email, hashedPassword, "user"]
    );

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Server error during registration" });
  }
};

// Register Organizer
exports.registerOrganizer = async (req, res) => {
  const { name, email, phone, password, category, document } = req.body;

  try {
    // Periksa apakah email sudah terdaftar
    const [existingUsers] = await db.query("SELECT id FROM users WHERE email = ?", [email]);
    if (existingUsers.length > 0) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Untuk organizer, kita akan menggunakan 'name' sebagai username dan first_name
    // last_name bisa dikosongkan atau diisi berdasarkan parsing 'name' jika 'name' adalah nama lengkap
    // phone_number akan disimpan
    // role akan diset sebagai 'organizer'
    await db.query(
      "INSERT INTO users (username, first_name, last_name, email, phone_number, password, role) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, name, null, email, phone, hashedPassword, "organizer"]
    );

    // CATATAN: Untuk 'category' dan 'document', Anda perlu tabel terpisah
    // (seperti `organizer_profiles`) dan implementasi upload file (misalnya dengan Multer).
    // Untuk demo ini, data tersebut tidak disimpan ke database.
    res.status(201).json({
      message: "Organizer account created successfully! (Category and Document not stored in current users table)",
    });
  } catch (err) {
    console.error("Organizer registration error:", err);
    res.status(500).json({ message: "Server error during organizer registration" });
  }
};

// Reset Password Request
exports.resetPasswordRequest = async (req, res) => {
  const { email } = req.body;

  try {
    const [rows] = await db.query("SELECT id FROM users WHERE email = ?", [email]);

    if (rows.length === 0) {
      // Untuk keamanan, selalu berikan pesan sukses generik untuk menghindari
      // informasi yang bocor tentang email yang terdaftar.
      return res.status(200).json({ message: "If your email is registered, you will receive a password reset link." });
    }

    // Dalam aplikasi nyata:
    // 1. Buat token reset password yang unik dan berbatas waktu.
    // 2. Simpan token ini di tabel 'password_reset_tokens' dengan tanggal kedaluwarsa.
    // 3. Kirim email ke pengguna yang berisi tautan dengan token tersebut.
    // Contoh: `http://yourfrontend.com/reset-password/${token}`

    // Untuk demo ini, kita hanya akan menyimulasikan keberhasilan.
    res.status(200).json({ message: "Password reset instructions sent to your email." });
  } catch (err) {
    console.error("Reset password request error:", err);
    res.status(500).json({ message: "Server error during password reset request" });
  }
};