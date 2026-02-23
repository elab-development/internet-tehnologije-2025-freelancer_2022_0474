require('dotenv').config({
  path: process.env.NODE_ENV === 'docker' ? '.env' : '.env.local'
});
const express = require("express");
const cors = require("cors");
const db = require("./models");
const authRoutes = require("./routes/auth.routes");
const jobRoutes = require("./routes/job.routes");
const newsletterRoutes = require("./routes/newsletterRoutes");
const contactRoutes = require("./routes/contact.routes");
const adminRoutes = require("./routes/admin.routes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const freelancerRoutes = require("./routes/freelancer.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/freelancers", freelancerRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

const PORT = 5000;
const connectDatabase = async () => {
  const maxRetries = 10;
  let retries = 0;

  while (retries < maxRetries) {
    try {
      await db.sequelize.authenticate();
      console.log('Database connected');
      break;
    } catch (err) {
      retries++;
      console.log(`Database not ready, retrying (${retries}/${maxRetries}) in 2 seconds...`);
      await new Promise(res => setTimeout(res, 2000));
    }
  }

  if (retries === maxRetries) {
    console.error('Could not connect to database after multiple attempts.');
    process.exit(1);
  }
};

connectDatabase();

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
