/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Send a contact message
 *     tags:
 *       - Contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - message
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@email.com
 *               message:
 *                 type: string
 *                 example: This is a test message.
 *     responses:
 *       200:
 *         description: Message sent successfully
 *       400:
 *         description: All fields are required
 *       500:
 *         description: Server error
 */
const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = await db.ContactMessage.create({
      email,
      message,
    });

    res.status(201).json({
      message: "Message saved successfully",
      data: contact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
