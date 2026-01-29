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
