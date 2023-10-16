const { Movies } = require("../database/models");
const Sequelize = require("sequelize");

module.exports = {
    getAllMovies: () => {
        return Movies.findAll({
            include: [{association: "generos"},{association: "actores"}]
        });
    },
    getNewestMovies: () => {
        return Movies.findAll({
            order:[["release_date","DESC"]],
            limit:5,
        });
    },
    getRecommendedMovies: () => {
        return Movies.findAll({
            where:{
                rating: {
                    [Sequelize.Op.gte]:8
                },
            },
        });
    },
    getMoviesDetail: (id) => {
        return Movies.findByPk(id);
    },
    getCreateMovie: (movie) => {
        return Movies.create(movie);
    },
    getMovieById: (id) => {
        return Movies.findByPk(id);
    },
    getUpdateMovie: (movie,id) => {
        return Movies.update(movie,id);
    },
    getDestroyMovie: (action) => {
        return Movies.destroy(action);
    }
};