const { allCourse, seeMore } = require("../controllers/controller");

const router = require("express").Router();

router.get("/", allCourse);
router.get("/seeMore", seeMore);

module.exports = router;
