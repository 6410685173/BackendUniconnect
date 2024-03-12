const fs = require("fs");
const fileName = "./database/uniconnect.db";

// Create the file
if (!fs.existsSync(fileName)) {
  fs.writeFile(fileName, "", (err) => {
    if (err) {
      console.error("Error creating database:", err);
      return;
    }
    console.log("database created successfully");
  });
} else {
  console.log("database already exists");
}

// database open
const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database(
  "./database/uniconnect.db",
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) return console.log(err);
  }
);

// create Table 'course'
let sql = `CREATE TABLE course (
    courseID TEXT PRIMARY KEY NOT NULL,
    courseName TEXT NOT NULL,
    description TEXT
    )`;
db.run(sql, (err) => {
  if (err) console.log(err.message);
});

//create Table 'User'
sql = `CREATE TABLE user(
  username TEXT PRIMARY KEY NOT NULL,
  password TEXT NOT NULL
)`;
db.run(sql, (err) => {
  if (err) console.log(err.message);
});
