import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js";
import menuRoutes from "./routes/menuRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/menu", menuRoutes);

app.get("/", (req, res) => {
  res.send("Backend MakanYuk aktif 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// Cek koneksi database lewat endpoint
app.get("/testdb", (req, res) => {
  db.query("SELECT * FROM admin LIMIT 3", (err, results) => {
    if (err) {
      console.error("❌ Database query failed:", err);
      res.status(500).send("Database error");
    } else {
      res.json({
        message: "✅ Database connected and query successful!",
        sampleData: results,
      });
    }
  });
});
