import pool from "../configdb.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT name FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query name failed" });
  }
};

export const postUserid = async (req, res) => {
  try {
    const { username, password, confpassword } = req.body;

    if (!username || !password || !confpassword) {
      return res.status(400).json({
        message: "กรุณากรอกข้อมูลให้ครบ",
      });
    }

    if(password !== confpassword){
        return res.status(400).json({
            message:"รหัสผ่านไม่ตรงกัน"
        })
    }

    const checkUser = await pool.query(
      "SELECT user_id FROM users WHERE username = $1",
      [username]
    );

    if (checkUser.rowCount > 0) {
      return res.status(409).json({
        message: "ชื่อผู้ใช้นี้ถูกใช้งานแล้ว",
      });
    }

    const saltRound = 10;
    const password_hash = await bcrypt.hash(password,saltRound);


    const result = await pool.query(
      "INSERT INTO users (username,password_hash,role) VALUES ($1,$2,$3) RETURNING user_id,username,role",
      [username, password_hash,"user"]
    );
    res.status(201).json({
      message: "สมัครสมาชิกสำเร็จ",
      data: result.rows[0],
    });
  } catch (error) {
    
    res.status(500).json({
      message: "error ไรวะ",error
    });
  }
};

export const postUser = async (req, res) => {
  try {
    const { name, station, building, floor, anydesk } = req.body;
    const result = await pool.query(
      "INSERT INTO users (name,station,building,floor,anydesk) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [name, station, building, floor, anydesk]
    );
    res.status(201).json({
      message: "ลงทะเบียนเรียบร้อย",
      data: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "error code :",
      errorMessages: error.message,
    });
  }
};
