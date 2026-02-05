const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/", jobController.getAllJobs);
router.post("/", authMiddleware, jobController.createJob);
router.get("/:id", jobController.getJobById);


module.exports = router;
