import express, { response } from 'express';
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
app.use("/images", express.static("images"));


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'products' 
});

// This is for SignUp page 
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

app.get('/product', (req, res) => {
    const query = 'SELECT * FROM product';
    db.query(query, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server error');
      } else {
        res.json(results);
      }
    });
  });


// This is Login page 
app.post('/login', (req, res)=>{
    const sql = 'SELECT * FROM signup WHERE email = ?';
    db.query(sql, [req.body.email], (err, data)=>{
        if(err) return res.json({Error: "Login error in server"})
            if(data.length > 0){
                bcrypt.compare(req.body.password.toString(), data[0].password, (err, response)=>{
                    if(err) return res.json({Error: "Password compose error"});
                    if(response){
                        return res.json({Status: "Success"});
                    }else{
                        return res.json({Error: "Password not matched"})
                    }
                })
            } else{
                return res.json({Error: "No email existed"})
            }
       })
})



app.get('/', (req, res) => {
    try {
        return res.json('Server is running');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
