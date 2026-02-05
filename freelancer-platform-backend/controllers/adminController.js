const { User } = require("../models");
const { NewsletterSubscriber } = require("../models");
const { ContactMessage } = require("../models");
const { Job } = require("../models");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "firstname", "lastname", "email", "role"]
    });

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllNewsletterEmails = async (req, res) => {
  try {
    const emails = await NewsletterSubscriber.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(emails);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
exports.getAllContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.findAll({
        order: [["createdAt", "DESC"]],
    });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};