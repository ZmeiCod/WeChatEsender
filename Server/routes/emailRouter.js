const Router = require("express");
const router = new Router();
const emailController = require("../controllers/emailController");

router.post("/", emailController.create);
router.get("/status", emailController.get);

module.exports = router;