import pool from "../configdb.js";

 export const getRepairs = async (req,res) =>{
    try {
    const result = await pool.query("SELECT * FROM case_repairs ORDER BY id DESC"); // 👈 ชื่อตารางคุณ
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
};

export const postRepairs = async(req,res) =>{
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
};