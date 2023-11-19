const express = require('express')
const app = express();
const mysql = require('mysql')
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host:'localhost',
    password: '12345',
    database: 'db_hotelgol'
});

app.post('/create', (req, res) => {
    const names = req.body.names;
    const number = req.body.number;
    const message = req.body.message;

    try {
        db.query("CALL CREATE_Contact(?, ?, ?)", [names, number, message], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json({ message: 'Values Inserted' });
            }
        });
    } finally {
        db.end(); // Cierra la conexión después de la consulta
    }
});


app.listen(3001, ()=>{
    console.log("Server running 3001");
});

