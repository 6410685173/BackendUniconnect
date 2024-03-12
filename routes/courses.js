const express = require("express"); //import express

const router = express.Router();

// open database
const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database(
  "./database/uniconnect.db",
  sqlite.OPEN_READWRITE,
  (err) => {
    if (err) return console.log(err);
  }
);
let sql;

router.use(express.json());

// get post section
// get test
router.get("/", (req, res) => {
  res.status(200);
  res.json({
    message: "hello world",
  });
});

// insert a course
router.post("/course", (req, res) => {
  const { courseID, courseName, description } = req.body;

  // sql insert
  sql = `INSERT INTO course(courseID ,courseName, description) VALUES(?,?,?)`;
  db.run(sql, [courseID, courseName, description], (err) => {
    if (err) {
      console.error("Error inserting course:", err);
      return res
        .status(422)
        .json({ status: 422 , success: false, error: err.message });
    }
    console.log("Successfully input", courseID, courseName, description);

    // success
    return res.status(200).json({ status: 200, success: true });
  });
});

// get courses
router.get("/courses", (req, res) => {
  sql = `SELECT * FROM course`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error("Error: ", err);
      return res
        .status(400)
        .json({ status: 404, success: false, error: err.message });
    }
    console.log("Courses Sent!")
		return res.json({status:200, data: rows, success:true})
  });
});

module.exports = router;
