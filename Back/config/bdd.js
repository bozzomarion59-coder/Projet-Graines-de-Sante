import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const bdd = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT, 
});

bdd.getConnection()
    .then(() => 
        console.log("database OK 🟢"))
    .catch((err) => {
        console.error("database connection error 🔴:", err);
    });

export default bdd;
