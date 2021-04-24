const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Server connected" });
});

//Assignment
app.get("/hitesh", (req, res) => {
  res.json({ hitesh: "uses instagram" });
});

app.get("/sign-out", (req, res) => {
  res.json({ message: "sign out successfully" });
});

app.listen(port, () => console.log(`Server is running at ${port}...`));
