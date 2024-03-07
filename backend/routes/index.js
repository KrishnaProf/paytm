const express = require("express");
const userRouter = require("./user");
const AccountRouter = require("./account");

const router = new express.Router();

router.use("/user", userRouter);
router.use("/account", AccountRouter);


module.exports = router;

