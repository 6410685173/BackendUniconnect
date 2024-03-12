const express = require("express");
const router = require("./routes/courses");

const app = express();
const PORT = 3000;

app.use("/api", router);

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
