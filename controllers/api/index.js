const router = require("express").Router();
const userRoutes = require("./userRoutes");
const gameRoutes = require("./gameRoutes")
const newsRoutes = require("./newsRoutes")

router.use("/user", userRoutes);
router.use("/game", gameRoutes);
router.use("/news", newsRoutes);

module.exports = router;
