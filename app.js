const express = require("express");
const morgan = require("morgan");
const fs = require("fs"); // file system
const userRouter = require("./routes/userRoutes");

const app = express();

const users = JSON.parse(fs.readFileSync("./dev-data/users.json", "utf-8"));
// JSON.stringify();
// console.log(users[0].name); // Access the first obj in the array

// Global Middleware
app.use(express.json()); // To read the body of the HTML
app.use(morgan("dev")); // For LOGS

// Create Middleware
// app.use((req, res, next) => {
//   console.log("I am middleware");
//   next();
// });

// Routes

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("server is running");
});
