const { Router } = require('express');
const router = Router();
const apiGenresRouter = require('./genres-routes');
const apiMoviesRouter = require('./movie-routes');
const apiActorsRouter = require('./actors-routes');

router.use("/genres", apiGenresRouter);
router.use("/movies",apiMoviesRouter);
router.use("/actors",apiActorsRouter);

module.exports = router;