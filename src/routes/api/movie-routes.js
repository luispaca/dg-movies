const { Router } = require("express");
const router = Router();
const apiMoviesController = require("../../controllers/api/movieController");

router.post("/",apiMoviesController.create);
router.delete("/:id",apiMoviesController.destroy);

module.exports = router;