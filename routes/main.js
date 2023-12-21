const { home } = require("../controllers/controller");

const router = require("express").Router();

router.get("/", home);
router.use("/users", require("./user"));
router.use("/courses", require("./course"));
router.use("/categories", require("./category"));

module.exports = router;
