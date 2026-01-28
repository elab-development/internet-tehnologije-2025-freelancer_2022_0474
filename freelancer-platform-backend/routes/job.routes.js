const express = require("express");
const { Job } = require("../models");
const auth = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", async (req, res) => {
  const jobs = await Job.findAll();
  res.json(jobs);
});
const roleCheck = (role) => (req, res, next) => {
  if (req.user.role !== role) return res.status(403).json({ message: "Forbidden" });
  next();
};
  
router.post("/", auth, roleCheck("client"), async (req, res) => {
  try {
    const job = await Job.create({
      ...req.body,
      clientId: req.user.id
    });
    res.json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
