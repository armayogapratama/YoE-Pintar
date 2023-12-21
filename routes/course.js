const {
  allCourse,
  addCourse,
  createCourse,
  editCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/controller");
const { hasloged, admin } = require("../middleware/auth.middleware");

const router = require("express").Router();

router.use(hasloged);
router.get("/", allCourse);
router.use(admin);
router.get("/add", addCourse);
router.post("/add", createCourse);
router.get("/edit/:id", editCourse);
router.post("/edit/:id", updateCourse);
router.get("/delete/:id", deleteCourse);

module.exports = router;
