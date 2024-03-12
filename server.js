const express = require("express");
const courseRouter = require("./routes/courses");
const authRouter = require("./routes/auth")
const cors = require('cors');

const app = express();
const PORT = 3000;

// const corsOptions = {
//   origin: 'http://localhost:3000', // Allow requests from this origin
//   methods: 'GET,POST', // Allow these HTTP methods
//   allowedHeaders: 'Content-Type,Authorization', // Allow these headers
// };
app.use(cors());

app.use("/api", courseRouter);
app.use("/auth", authRouter)

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
