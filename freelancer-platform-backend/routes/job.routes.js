const express = require("express");
const { Job } = require("../models");
const auth = require("../middleware/auth.middleware");

const router = express.Router();

// PUBLIC - list jobs
router.get("/", async (req, res) => {
  const jobs = await Job.findAll();
  res.json(jobs);
});

// PROTECTED - create job (only logged users)
router.post("/", auth, async (req, res) => {
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
