const express = require("express");
const cors = require("cors");
const db = require("./models");
const authRoutes = require("./routes/auth.routes");
const jobRoutes = require("./routes/job.routes");




const app = express();

app.use(cors());
app.use(express.json()); // omogućava JSON body

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

const PORT = 5000;
db.sequelize.sync();
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
