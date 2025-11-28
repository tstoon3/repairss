import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
    user: "postgres",
    password: "1234",
    database: "repairdb",
    port: 5432,
    host: "localhost"
});

pool
    .connect()
    .then((client) => {
        console.log("Connected Successfully");
        client.release();
    })
    .catch ((err)=>console.error("Connection error :",err.stack));

    export default pool;
