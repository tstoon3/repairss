import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pkg from "pg";
import { build } from "nuxt";

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "repairdb",
  password: "1234",
  port: 5432,
});

app.post("/api/case_repairs", async (req, res) => {
  try {
    const { name, station, building, floor, anydesk, service_type, note } =
      req.body;

    const result = await pool.query(`INSERT INTO case_repairs 
        (name, station, building, floor, anydesk, service_type, note, created_at) 
       VALUES ($1,$2,$3,$4,$5,$6,$7, CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Bangkok') 
       RETURNING *`,[name,station,building,floor,anydesk,service_type,note]);

       res.json({success : true, data: result.row[0]});

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }

  app.listen(4000,()=> {console.log("✅ Server running on http://localhost:4000")})
});
