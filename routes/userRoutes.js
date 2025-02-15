const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

//befor userController
// router.get("/",(req,res)=>{
//     res.send("Hello");
// });
// router.post("/",(req,res)=>{
//     res.send("create user");
// });
// router.patch("/",(req,res)=>{
//     res.send("update user");
// });
// router.delete("/",(req,res)=>{
//     res.send("no users");
// });

//after userController
router.get("/", userController.getUser);
router.post("/", userController.createUser);

module.exports = router;
