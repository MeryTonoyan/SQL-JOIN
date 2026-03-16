import mysql from "mysql2/promise";
import express from 'express';
import cors from 'cors';
import db from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/tasks/inner', async (req, res) => {
    let [rows] = await db.query(`
        SELECT payments.id, students.name, students.student_group AS 'group', payments.month, payments.amount 
        FROM students 
        INNER JOIN payments ON students.id = payments.student_id
    `);
    res.json(rows);
});

app.get('/tasks/left', async (req, res) => {
    let [rows] = await db.query(`
        SELECT students.id, students.name, students.student_group AS 'group', payments.month, payments.amount 
        FROM students 
        LEFT JOIN payments ON students.id = payments.student_id
    `);
    res.json(rows);
});

const port = 3006;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});