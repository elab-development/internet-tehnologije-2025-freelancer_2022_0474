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
const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/", jobController.getAllJobs);
router.post("/", authMiddleware, jobController.createJob);
router.get("/:id", jobController.getJobById);


module.exports = router;
