require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => console.log("Connection error: " + err));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
