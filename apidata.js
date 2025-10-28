import express from "express";
import pkg from "pg"; // ✅ ใช้ pg ไม่ใช่ pb
import cors from "cors";

const { Pool } = pkg;

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  password: "1234",
  database: "repairdb",
  port: 5432,
  host: "localhost",
});

// เชื่อมต่อฐานข้อมูล
pool
  .connect()
  .then((client) => {
    console.log("✅ Connected Successfully");
    client.release();
  })
  .catch((err) => console.error("❌ Connection error:", err.stack));

// ดึงข้อมูลจาก table
app.get("/api/repairs", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM case_repairs"); // 👈 ชื่อตารางคุณ
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
});

app.post("/api/postrepairs", async (req, res) => {
  try {
    const { name, station, building, floor, anydesk, service_type, note } =
      req.body;

    const result = await pool.query(
      "INSERT INTO case_repairs (name,station,building,floor,anydesk,service_type,note,status) VALUES($1,$2,$3,$4,$5,$6,$7,'รอดำเนินการ') RETURNING *",
      [name, station, building, floor, anydesk, service_type, note]
    );
    res.status(201).json({
      message: "บันทึกข้อมูลสำเร็จ",
      data: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "error code :",
      errorMessages: error.message,
    });
  }
});

// run server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
