const dayjs = require("dayjs");
const { Movies } = require("../database/models");
const Sequelize = require("sequelize");

module.exports = {
    getAllMovies: () => {
        return Movies.findAll();
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
        return Movies.findByPk(id,{ include: ["genre","actors"]})
        .then((movie) => {
            return {
                id: movie.id,
                title: movie.title,
                rating: movie.rating,
                awards: movie.awards,
                release_date: dayjs(movie.release_date).format("YYYY-MM-DD"),
                actors: movie.actors.map((actor) => {
                    return {
                        id: actor.id,
                        firstName: actor.firstName,
                        lastName : actor.lastName,
                        rating: actor.rating
                    };
                }),
                genreName: movie.genre?.name ?? "NO TIENE GÉNERO",
                genre_id: movie.genre_id,
                length: movie.length
            };
        });
    },
    getCreateMovie: (movie) => {
        return Movies.create(movie);
    },
    getUpdateMovie: (movie,id) => {
        return Movies.update(movie,id);
    },
    getDestroyMovie: (action) => {
        return Movies.destroy(action);
    }
};