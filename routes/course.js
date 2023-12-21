const {
  allCourse,
  addCourse,
  createCourse,
  editCourse,
  updateCourse,
  deleteCourse,
  buy,
} = require("../controllers/controller");

const router = require("express").Router();

router.get("/", allCourse);
router.get("/add", addCourse);
router.post("/add", createCourse);
router.get("/edit/:id", editCourse);
router.post("/edit/:id", updateCourse);
router.get("/delete/:id", deleteCourse);
router.get("/buy/:id",buy)

module.exports = router;
