/**
 * @swagger
 * /api/newsletter/subscribe:
 *   post:
 *     security: []
 *     summary: Subscribe to the newsletter
 *     tags:
 *       - Newsletter
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 */
const express = require("express");
const router = express.Router();
const newsletterController = require("../controllers/newsletterController");

router.post("/subscribe", newsletterController.subscribe);

module.exports = router;
