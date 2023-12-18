const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());


const userRoutes = require("./routes/userRoutes");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// console.log("Database url", process.env.DATABASE_URL);
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })

  .then(() => app.listen("4000", () => console.log(`server running on: 4000`)))

  .catch((error) => console.log("Error Message", error.message));
const conn = mongoose.connection;
conn.on("open", function () {
  console.log("connected...");
});



app.use("/api/user", userRoutes);
