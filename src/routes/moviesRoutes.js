const { Router } = require("express");
const router = Router();
const moviesController = require("../controllers/moviesController");

router.get("/movies",moviesController.list);
router.get("/movies/new",moviesController.new);
router.get("/movies/recommended",moviesController.recommended);
router.get("/movies/detail/:id",moviesController.detail);
router.get("/movies/add",moviesController.add);
router.post("/movies/create",moviesController.create);
router.get("/movies/edit/:id",moviesController.edit);
router.post("/movies/update/:id",moviesController.update);
router.get("/movies/delete/:id",moviesController.delete);
router.post("/movies/delete/:id",moviesController.destroy);
router.get("/movies/search",moviesController.search);

module.exports = router;