const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,

  connectTimeout: 60000, // 60 seconds
});

// Test connection
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ MySQL Connected Successfully");
    connection.release();
  } catch (error) {
    console.error("❌ MySQL Connection Failed:", error.message);
  }
})();

module.exports = pool;