import pool from "../configdb.js";

export const getUsers = async (req,res) =>{
    try{
        const result = await pool.query ("SELECT name FROM Users");
        res.json(result.rows);
    }catch (err){
        console.error(err);
        res.status(500).json({error: "Database query name failed"});

    }
};
