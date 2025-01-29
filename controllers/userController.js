const fs = require("fs");

// const users = fs.readFileSync("./dev-data/users.json", "utf-8"); // Reading the file as String
const users = JSON.parse(fs.readFileSync("./dev-data/users.json", "utf-8")); // Reading the file as JSON

exports.getId = (req, res, next) => {
  const id = req.params.id;
  req.id = id;
  next();
};

exports.checkId = (req, res, next) => {
  if (req.id > users.length || req.id < 1) {
    res.send("Invalid user");
  }
  next();
};

exports.getAllUsers = (req, res) => {
  // 1) Read the file
  // 2) Send Users
  res.json(users);
};

exports.getUser = (req, res) => {
  // Get the id from the URL
  const user = users.find((el) => el.id == req.id);
  res.json(user);
};

exports.createUser = (req, res) => {
  // 1) Get Data from frontend
  const data = req.body;
  // 2) get new id number
  const id = { id: users.length + 1 };
  const user = Object.assign(id, data);

  // Add new user to the users
  users.push(user);
  // re write the users.json file
  fs.writeFileSync("./dev-data/users.json", JSON.stringify(users));
};

exports.updateUser = (req, res) => {
  res.send("I am Patch");
};

exports.deleteUser = (req, res) => {
  res.send("I am delete");
};
