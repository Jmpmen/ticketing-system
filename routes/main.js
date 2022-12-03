const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const ticketsController = require("../controllers/tickets");
const { ensureAuth } = require("../middleware/auth");

//Main Routes 
router.get("/", ensureAuth, ticketsController.getIndex);
router.get("/user/:id", ensureAuth, ticketsController.getUser);
// router.get("/auth", homeController.getAuth);

//Routes for user login/signup
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
