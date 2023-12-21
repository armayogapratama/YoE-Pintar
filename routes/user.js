const { allUser, profile } = require("../controllers/controller");
const { hasloged } = require("../middleware/auth.middleware");

const router = require("express").Router();

router.use(hasloged);
router.get("/", allUser);
router.get("/profile/:id", profile);

module.exports = router;
