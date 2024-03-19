const express = require("express");
const bcrpyt = require("bcrypt");
const authRouter = express();

authRouter.use(express.json());

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
//

// auth
// auth register
authRouter.post("/register", async (req, res) => {
  const { username, password, confirmPassword } = await req.body;

  if (password != confirmPassword) {
    return res.status(400).json({ message: "passwords do not match" });
  }

  const hashedPassword = await bcrpyt.hash(password, 10);

  sql = `INSERT INTO user(username, password) VALUES(?,?)`;
  db.run(sql, [username, hashedPassword], (err) => {
    if (err && err.errno === 19) {
      return res.status(400).json({ error: err.message });
    }else if(err){
			return res.status(500).json({ error: err.message });
		}
    console.log(`Created user: ${username}`);
    return res.status(200).json({ message: `Inserted user: ${username}!` });
  });
});
//

// auth login
authRouter.post("/login", (req, res) => {
  const { username, password } = req.body;

  // find user
  sql = `SELECT * FROM user WHERE username = ?`;
  db.get(sql, [username], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: "User not found" });
    try {
      if (bcrpyt.compareSync(password, row.password)) {
        console.log(`Logged In user: ${username}`);
        return res.status(200).json({ message: "Logged In!" });
      } else {
        return res
          .status(401)
          .json({ message: "Incorrect username or password" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  });
});
//
module.exports = authRouter;
