const { NewsletterSubscriber } = require("../models");

exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const existing = await NewsletterSubscriber.findOne({ where: { email } });
    if (existing) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    await NewsletterSubscriber.create({ email });

    res.json({ message: "Successfully subscribed to newsletter" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
