const Router = require("express");
const router = new Router();
const emailController = require("../controllers/emailController");

router.post("/", emailController.create);

module.exports = router;