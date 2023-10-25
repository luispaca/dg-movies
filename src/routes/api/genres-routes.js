const { Router } = require("express");
const router = Router();
const apiGenresController = require("../../controllers/api/genresController");

router.get("/", apiGenresController.list);

module.exports = router;