const router = require("express").Router();
const firstController = require("../../controllers/firstController")
// Matches with "/api/items"
router.route("/")
  .get(firstController.findAll)
  .post(firstController.create);

// Matches with "/api/items/:id"
router.route("/:id")
  .get(firstController.findById)
  .put(firstController.update)
  .delete(firstController.remove);

module.exports = router;
