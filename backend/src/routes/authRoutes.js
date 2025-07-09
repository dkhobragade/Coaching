import express from "express";

const router = express.Router();

router.post("/signin", (req, res) => {
  res.send("sign");
});

router.post("/signup", (req, res) => {
  res.send("sign");
});

router.post("/logout", (req, res) => {
  res.send("sign");
});

export default router;
