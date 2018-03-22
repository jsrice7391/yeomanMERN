const router = require("express").Router();

// Matches with "/api/books"
router.route("/")
  .get(firstController.findAll)
  .post(firstController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(firstController.findById)
  .put(firstController.update)
  .delete(firstController.remove);

module.exports = router;
