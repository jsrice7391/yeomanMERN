const router = require("express").Router();
const ItemRoutes = require("./first");

// Item routes
router.use("/first", ItemRoutes);

module.exports = router;
