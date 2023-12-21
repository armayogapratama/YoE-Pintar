const { allUser, profile } = require("../controllers/controller");

const router = require("express").Router();

router.get("/", allUser);
router.get("/profile/:id", profile);

module.exports = router;
