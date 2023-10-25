const { Router } = require("express");
const router = Router();
const apiActorsController = require("../../controllers/api/actorsController");

router.post("/",apiActorsController.list);
router.delete("/:id",apiActorsController.destroy);

module.exports = router;