const express = require("express");
const fs = require("fs");

const app = express();

const users = JSON.parse(fs.readFileSync("./dev-data/users.json", "utf-8"));
// console.log(users[0].name); // Access the first obj in the array

// Middleware
app.use(express.json());

app.get("/users", (req, res) => {
  res.json(users);
});
app.post("/users", (req, res) => {
  res.send("create users");
});
app.patch("/users", (req, res) => {
  res.send("Update users");
});
app.delete("/users", (req, res) => {});

app.listen(3000, () => {
  console.log("server is running");
});
