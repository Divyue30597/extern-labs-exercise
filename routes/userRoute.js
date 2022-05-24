const express = require("express");
const userController = require("../controller/userController");
const authController = require("../controller/authController");

const router = express.Router();

// for a new user to sign up
router.route("/signUp").post(authController.signUp);
// for a user to login
router.route("/login").post(authController.login);

router.route("/").get(authController.protect, userController.getAllUser);
// router.route("/:id").get(userController.getSingleUser);

module.exports = router;
