/**
 * @swagger
 * /api/jobs:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new job
 *     tags:
 *       - Jobs
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
 *                 example: "30 days"
 *               detailedDescription:
 *                 type: string
 *                 example: Looking for an experienced web developer to create a responsive website using React and Node.js. The project should be completed within 30 days and the budget is $5000.
 *               userId:
 *                 type: integer
 *                 example: 1
 * 
 * 
*/
const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/", jobController.getAllJobs);
router.post("/", authMiddleware, jobController.createJob);
router.get("/:id", jobController.getJobById);


module.exports = router;
