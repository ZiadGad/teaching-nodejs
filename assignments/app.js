const express = require("express");
const productRouter = require("./routes/productRoutes.js");
const app = express();

// products
app.use("/products", productRouter);

//users
app.get("/users", (req, res) => {
  res.send("hello");
});
app.post("/users", (req, res) => {
  res.send("create user");
});
app.patch("/users", (req, res) => {
  res.send("update user");
});
app.delete("/users", (req, res) => {
  res.send("no users");
});

//reviews
app.get("/reviews", (req, res) => {
  res.send("get review");
});
app.post("/reviews", (req, res) => {
  res.send("create review");
});
app.patch("/reviews", (req, res) => {
  res.send("update review");
});
app.delete("/reviews", (req, res) => {
  res.send("no review");
});

//cart
app.get("/cart", (req, res) => {
  res.send("get cart");
});
app.post("/cart", (req, res) => {
  res.send("create cart");
});
app.patch("/cart", (req, res) => {
  res.send("update cart");
});
app.delete("/cart", (req, res) => {
  res.send("no cart");
});

app.listen(3000, () => {
  console.log("server is running");
});
