/**
 * @swagger
 * /api/freelancers:
 *   get:
 *     summary: Get all freelancers
 *     tags: [Freelancers]
 *     responses:
 *       200:
 *         description: List of freelancers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Freelancer'
 */
/**
 * @swagger
 * /api/freelancers:
 *   post:
 *     summary: Create freelancer profile
 *     tags: [Freelancers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - title
 *               - hourlyRate
 *               - location
 *               - skills
 *               - shortBio
 *             properties:
 *               name:
 *                 type: string
 *               title:
 *                 type: string
 *               hourlyRate:
 *                 type: string
 *               location:
 *                 type: string
 *               skills:
 *                 type: string
 *               shortBio:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Profile created
 *       400:
 *         description: Profile already exists
 *       403:
 *         description: Only freelancers can create profiles
 *       500:
 *         description: Server error
 */
const express = require("express");
const router = express.Router();
const db = require("../models");
const authMiddleware = require("../middleware/auth.middleware");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage: storage });

const Freelancer = db.Freelancer;

router.get("/", async (req, res) => {
  try {
    const freelancers = await Freelancer.findAll();
    res.json(freelancers);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/", authMiddleware, upload.single("image"),async (req, res) => {
  try {

    if (req.user.role !== "freelancer") {
      return res.status(403).json({
        message: "Only freelancers can create profiles"
      });
    }
    const existing = await Freelancer.findOne({
      where: { userId: req.user.id }
    });

    if (existing) {
      return res.status(400).json({
        message: "Profile already exists"
      });
    }
    const { name, title, hourlyRate, location, skills, shortBio } = req.body;
      const image = req.file ? `/uploads/${req.file.filename}` : null;

    const freelancer = await Freelancer.create({
        name,
        title,
        hourlyRate,
        location,
        skills,
        shortBio,
        image: image,
        userId: req.user.id
      });

    res.status(201).json(freelancer);

  } catch (err) {
    res.status(500).json({ message: "Error creating profile" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const freelancer = await Freelancer.findByPk(req.params.id);

    if (!freelancer) {
      return res.status(404).json({ message: "Freelancer not found" });
    }

    res.json(freelancer);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const freelancer = await Freelancer.findByPk(req.params.id);

    if (!freelancer) {
      return res.status(404).json({ message: "Freelancer not found" });
    }

    if (freelancer.userId !== req.user.id) {
      return res.status(403).json({ message: "You can only delete your own profile" });
    }

    await Freelancer.destroy({
      where: { id: req.params.id },
    });

    res.json({ message: "Freelancer profile deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;