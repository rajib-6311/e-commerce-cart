import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
const salt = 10;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'products' // Replace with your database name
});

app.post('/signup', (req, res)=>{
    const sql = "INSERT INTO signup (`name`,`email`,`password`) VALUES(?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash)=>{
        if(err) return res.json({Error: "Error for hashing"});
        const values = [
            req.body.name,
            req.body.email,
            hash
        ]
        db.query(sql, [values], (err, result)=>{
            if(err) return res.json({Error: "Inserting data error in server"});
            return res.json({Status: "Success"});
        })
    })

})

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to the database.');
});

app.get('/', (req, res) => {
    try {
        return res.json('From Backend Side');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
