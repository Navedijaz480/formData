const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");

const userRouter = require("./routes/userRoutes");


const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

// console.log("Database url", URL);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const conn = mongoose.connection;
conn.on("open", function () {
  console.log("connected...");
});

app.use(express.json());
app.use("/user", userRouter);


app.all("*", (req, res) => {
  res.status(404).send("<h1>404! Page not found</h1>");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
