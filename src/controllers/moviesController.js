const movieService = require("../services/movie-service");

module.exports = {
    list: (req,res) => {
        movieService.getAllMovies().then((movies) => {
            res.render("moviesList", { movies });
        });
    },
    new: (req,res) => {
        movieService.getNewestMovies().then((movies) => {
            res.render("newestMovies", { movies });
        });
    },
    recommended: (req,res) => {
        movieService.getRecommendedMovies().then((movies) => {
            res.render("recommendedMovies", { movies });
        });
    },
    detail: (req,res) => {
        movieService.getMoviesDetail(req.params.id).then((movie) => {
            res.render("moviesDetail",{ movie });
        });
    },
    add: (req,res) => {
        res.render("moviesAdd");
    },
    create: (req,res) => {
        const movie = {
            title : req.body.title,
            rating : req.body.rating,
            awards : req.body.awards,
            release_date : req.body.release_date,
            length : req.body.length
        };
        movieService.getCreateMovie(movie);
        res.redirect("/movies");
    },
    edit: (req,res) => {
        const id = req.params.id;
        movieService.getMovieById(id).then((movie) => {
            res.render("moviesEdit", { movie });
        });
    },
    update: (req,res) => {
        const movie = {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
        };
        const id = {
            where : {
                id: req.params.id,
            }
        }
        movieService.getUpdateMovie(movie,id);
        res.redirect("/movies");
    },
    delete: (req,res) => {
        const id = req.params.id;
        movieService.getMovieById(id).then((movie) => {
            res.render("moviesDelete", { movie });
        });
    },
    destroy: (req,res) => {
        const action = {
            where : {
                id: req.params.id,
            }
        };
        movieService.getDestroyMovie(action);
        res.redirect("/movies");
    }
};