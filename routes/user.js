const { allUser, readMore } = require("../controllers/controller");

const router = require("express").Router();

router.get("/", allUser);
router.get("/readMore", readMore);

module.exports = router;
