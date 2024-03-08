const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express(); 
const PORT = 3000; 

const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./database/uniconnect.db", sqlite.OPEN_READWRITE, (err) =>{
    if(err) return console.log(err);
})

app.use('/', router);
app.use(bodyParser.json())


app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port " + PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 