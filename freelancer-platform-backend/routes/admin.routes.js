/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin-only endpoints
 */

/**
 * @swagger
 * /api/admin/users:
 *   get:
 *     summary: Get all users
 *     description: Returns a list of all registered users (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 *       403:
 *         description: Admin access required
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/admin/newsletter:
 *   get:
 *     summary: Get newsletter subscribers
 *     description: Returns all newsletter email subscriptions (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of emails
 *       403:
 *         description: Admin access required
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/admin/contact:
 *   get:
 *     summary: Get contact messages
 *     description: Returns messages sent through contact form (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of messages
 *       403:
 *         description: Admin access required
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/admin/jobs:
 *   get:
 *     summary: Get all job posts
 *     description: Returns all job postings (Admin only)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of jobs
 *       403:
 *         description: Admin access required
 *       401:
 *         description: Unauthorized
 */
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const isAdmin = require("../middleware/isAdmin");
const adminController = require("../controllers/adminController");

router.get("/users", authMiddleware, isAdmin, adminController.getAllUsers);

router.get("/newsletter",authMiddleware,isAdmin,adminController.getAllNewsletterEmails);
router.get("/contact",authMiddleware,isAdmin,adminController.getAllContactMessages);
router.get("/jobs", authMiddleware, isAdmin, adminController.getAllJobs);

module.exports = router;
