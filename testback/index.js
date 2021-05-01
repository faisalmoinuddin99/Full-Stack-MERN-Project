const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Server connected" });
});

const admin = (req, res) => {
  res.send("this is admin dashboard");
};

const isAdmin = (req, res, next) => {
  let checkIsAdmin = true;
  if (!checkIsAdmin) {
    console.log("Authentication success....");
  } else {
    console.log("Not an Admin");
  }
  next();
};
app.get("/admin", isAdmin, admin);

//Assignment
app.get("/hitesh", (req, res) => {
  res.json({ hitesh: "uses instagram" });
});

app.get("/sign-out", (req, res) => {
  res.json({ message: "sign out successfully" });
});

app.listen(port, () => console.log(`Server is running at ${port}...`));
