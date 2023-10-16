const actorService = require("../services/actors-service");

module.exports = {
    list: (req,res) => {
        actorService.getAllActors().then((actors) => {
            res.render("actorsList", { actors });
        });
    },
    detail: (req,res) => {
        actorService.getActorsDetail(req.params.id).then((actor) => {
            res.render("actorsDetail", { actor });
        });
    }
};