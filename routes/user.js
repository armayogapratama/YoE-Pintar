const { allUser, profile, addProfile, createProfile } = require("../controllers/controller");
const { hasloged } = require("../middleware/auth.middleware");

const router = require("express").Router();

router.use(hasloged);
router.get("/", allUser);
router.get("/profile/:id", profile);
router.get("/profile/add/:id",addProfile)
router.post("/profile/add/:id",createProfile)

module.exports = router;
