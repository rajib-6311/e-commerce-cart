const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'e_commerce'
})

app.get('/', (req, res)=>{
    return res.json('From Backend Side');
})

app.listen(8081, ()=>{
    console.log("listening");
})