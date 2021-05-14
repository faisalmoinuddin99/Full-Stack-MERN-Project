const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUser,
  getAllUsers,
  updateUser,
  userPurchasedList,
} = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
// getAllUsers
router.get("/users", getAllUsers);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

router.put(
  "/orders/user/:userId",
  isSignedIn,
  isAuthenticated,
  userPurchasedList
);

module.exports = router;
