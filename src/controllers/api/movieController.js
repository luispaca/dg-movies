const movieService = require("../../services/movie-service");

module.exports = {
    create: async (req,res) => {
        const movie = await movieService.getCreateMovie(req.body);
        res.json({
            meta: {
                status: 201,
                url: req.originalUrl
            },
            data: movie,
        });
    },
    destroy: async (req,res) => {
        const id = req.params.id;
        await movieService.getDestroyMovie(id);
        res.json({
            meta: {
                status: 201,
                url: req.originalUrl
            }
        });
    }
};