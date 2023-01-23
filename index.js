const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 4000;
const db = process.env.MONGO_URI;

const connect = async () => {
  return mongoose.connect(db);
};

app.use(bodyParser.json());
app.use(router);

(async () => {
  try {
    await connect();
    console.log("DB Connected!");
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
