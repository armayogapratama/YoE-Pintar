const {
  allCategory,
  addCategory,
  createCategory,
  editCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/controller");

const router = require("express").Router();

router.get("/", allCategory);
router.get("/add", addCategory);
router.post("/add", createCategory);
router.get("/edit/:id", editCategory);
router.post("/edit/:id", updateCategory);
router.get("/delete/:id", deleteCategory);

module.exports = router;
