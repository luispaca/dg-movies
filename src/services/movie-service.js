const { Movies, Actors } = require("../database/models");
const Sequelize = require("sequelize");
const dayjs = require("dayjs");

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
    getDestroyMovie: (id) => {
        //Busco todos los actores que tengan como película favorita la que quiero BORRAR
        const actorWithFavoritesMovie =  Actors.findAll({
            where: { favorite_movie_id: id }
        }).then((actors) => {
            return actors.map((actor) => {
                return actor.update({ favorite_movie_id: null });
            });
        });

        //Busco la película que quiero BORRAR y elimino la relación con los actores
        const actorMovies = Movies.findByPk(id, {
            include: ["actors"],
        }).then((movie) => {
            return movie.actors.map((actor) => {
                return actor.removeMovie(movie);
            });
        });

        //Espero a que se eliminen las relaciones y luego elimino la película
        return Promise.all([actorWithFavoritesMovie, actorMovies]).then(() => {
          return Movies.destroy({
            where: {
                id: id
            }
          });  
        });
    }
};