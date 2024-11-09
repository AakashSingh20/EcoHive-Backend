const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const port = process.env.PORT || 4000;
const connectDB = require("./db/connection");

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const start = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log("Server is running on port: " + port);
  });
};

start();
