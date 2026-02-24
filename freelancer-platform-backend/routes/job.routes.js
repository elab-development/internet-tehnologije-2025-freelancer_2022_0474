/**
 * @swagger
 * /api/jobs:
 *   post:
 *     summary: Create a new job
 *     tags:
 *       - Jobs
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - budget
 *             properties:
 *               title:
 *                 type: string
 *                 example: Web Development Project
 *               description:
 *                 type: string
 *                 example: Need a developer to build a responsive website.
 *               budget:
 *                 type: number
 *                 example: 5000
 *               duration:
 *                 type: string
 *                 example: 30 days
 *               detailedDescription:
 *                 type: string
 *                 example: Full project details here.
 *     responses:
 *       201:
 *         description: Job created successfully
 *       403:
 *         description: Only clients can post jobs
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
/**
 * @swagger
 * /api/jobs:
 *   get:
 *     summary: Get all jobs
 *     description: Returns a list of all job postings
 *     tags: [Jobs]
 *     responses:
 *       200:
 *         description: List of jobs retrieved successfully
 *       500:
 *         description: Server error
 */
const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");
const authMiddleware = require("../middleware/auth.middleware");
const { Job } = require("../models");


router.get("/", jobController.getAllJobs);
router.post("/", authMiddleware, jobController.createJob);
router.get("/:id", jobController.getJobById);
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    
    if (job.userId !== req.user.id) {
      return res.status(403).json({ message: "You can only delete your own job" });
    }

    await Job.destroy({ where: { id: req.params.id } });

    res.json({ message: "Job deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
