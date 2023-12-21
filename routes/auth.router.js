const {
  registerForm,
  loginForm,
  login,
  register,
  logout,
} = require("../controllers/auth.controller");

const router = require("express").Router();

router.get("/register", registerForm);
router.post("/register", register);
router.get("/login", loginForm);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
