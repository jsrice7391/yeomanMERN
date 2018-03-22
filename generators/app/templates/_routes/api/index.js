const router = require("express").Router();
const bookRoutes = require("./first");

// Book routes
router.use("/first", bookRoutes);

module.exports = router;
