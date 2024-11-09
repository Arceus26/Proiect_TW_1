const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
});

db.connect((err) => {
    if (err) {
        console.error("Database connection error:", err);
        return;
    }
    db.query("CREATE DATABASE IF NOT EXISTS signup", (err) => {
        if (err) {
            console.error("Error creating database:", err);
            return;
        }
        db.changeUser({ database: "signup" }, (err) => {
            if (err) {
                console.error("Error switching to database:", err);
                return;
            }
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS login (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    email VARCHAR(255) NOT NULL,
                    password VARCHAR(255) NOT NULL
                )
            `;
            db.query(createTableQuery, (err) => {
                if (err) {
                    console.error("Error creating table:", err);
                } else {
                    console.log("Database and table ready");
                }
            });
        });
    });
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error("Database insert error:", err);
            return res.status(500).json({ message: "Database insert error", error: err });
        }
        return res.json(data);
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error("Database insert error:", err);
            return res.status(500).json({ message: "Database insert error", error: err });
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.status(401).json("Failed");
        }
    });
});

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
