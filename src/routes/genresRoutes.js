const { Router } = require("express");
const genresController = require("../controllers/genresController");
const router = Router();

router.get("/genres",genresController.list);
router.get("/genres/detail/:id",genresController.detail);

module.exports = router;