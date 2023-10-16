const genreService = require("../services/genres-service");

module.exports  ={
    list: (req,res) => {
        return genreService.getAllGenres().then((genres) => {
            res.render("genresList", { genres });
        })
    },
    detail: (req,res) => {
        return genreService.getGenresDetail(req.params.id).then((genre) => {
            res.render("genresDetail", { genre });
        });
    }
};