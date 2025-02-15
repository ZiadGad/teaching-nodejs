const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// befor controller
//  router.get("/",(req,res)=>{
//     res.send("any review?");
//  });
//  router.post("/",(req,res)=>{
//     res.send("create review");
//  });
//  router.patch("/",(req,res)=>{
//     res.send("update review");
//  });
//  router.delete("/",(req,res)=>{
//     res.send("no review");
//  });

// befor controller
router.get("/", reviewController.getReview);
router.post("/", reviewController.createReview);

module.exports = router;
