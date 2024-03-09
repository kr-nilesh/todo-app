const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// body {
//     "title": String,
//     "description": String
// }

app.post("/todo", function (req, res) {});

app.get("/todos", function (req, res) {
  res.send("hello");
});

app.put("/completed", function (req, res) {});

app.listen(PORT, function (err) {
  if (err) {
    console.log("Error in server setup");
  }

  console.log("Server listening on PORT", PORT);
});
