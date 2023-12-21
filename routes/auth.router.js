const {
  registerForm,
  loginForm,
  login,
  register,
  logout,
} = require("../controllers/auth.controller");
const { hasGuest } = require("../middleware/auth.middleware");

const router = require("express").Router();

router.get("/register", hasGuest, registerForm);
router.post("/register", hasGuest, register);
router.get("/login", hasGuest, loginForm);
router.post("/login", hasGuest, login);
router.get("/logout", logout);

module.exports = router;
