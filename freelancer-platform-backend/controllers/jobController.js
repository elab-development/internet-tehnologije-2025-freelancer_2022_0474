const { Job } = require("../models");

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.createJob = async (req, res) => {
  try {
    
    if (req.user.role !== "client") {
      return res.status(403).json({ message: "Only clients can post jobs" });
    }

    const { title, description, budget, duration, detailedDescription } = req.body;

    const job = await Job.create({
      title,
      description,
      budget,
      duration,
      detailedDescription,
      userId: req.user.id,
    });

    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(job);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

