const { allCourse, seeMore } = require("../controllers/controller");

const router = require("express").Router();

router.get("/", allCourse);
router.get("/seeMore/:id", seeMore);

module.exports = router;
