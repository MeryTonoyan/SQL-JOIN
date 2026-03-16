import mysql from "mysql2/promise";

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"sql-join",
    port:3306
});
export default db;
