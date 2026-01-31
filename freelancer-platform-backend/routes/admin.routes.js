const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const isAdmin = require("../middleware/isAdmin");
const adminController = require("../controllers/adminController");

router.get("/users", authMiddleware, isAdmin, adminController.getAllUsers);

router.get("/newsletter",authMiddleware,isAdmin,adminController.getAllNewsletterEmails);
router.get("/contact",authMiddleware,isAdmin,adminController.getAllContactMessages);

module.exports = router;
