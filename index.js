const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

const userRouter = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "MongoDB connection error:"));
conn.once("open", function () {
  console.log("Connected to MongoDB...");
});

app.use(express.json());
app.use("/user", userRouter);

app.all("*", (req, res) => {
  res.status(404).send("<h1>404! Page not found</h1>");
});

// Check if running in AWS Lambda environment
if (process.env.AWS_LAMBDA_FUNCTION_NAME) {
  // Export the Express app for use in AWS Lambda
  module.exports = app;
} else {
  // Start a local server if not in AWS Lambda environment
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
