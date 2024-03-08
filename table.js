const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./database/uniconnect.db", sqlite.OPEN_READWRITE, (err) =>{
    if(err) return console.log(err);
})

const sql = `CREATE TABLE course(ID INTEGER PRIMARY KEY, courseName, description)`;
db.run(sql);