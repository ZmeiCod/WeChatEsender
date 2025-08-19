const Router = require("express");
const router = new Router();

const emailRouter = require("./emailRouter");
router.use("/email", emailRouter);

module.exports = router;
