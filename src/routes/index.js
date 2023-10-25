const { Router } = require("express");
const router = Router();
const apiRouter = require("./api/index");

router.use("/api",apiRouter);

/**HOME PAGE */
router.get("/",(req,res)=>{
    res.render("index",{  title:"Digital House" });
});

module.exports= router;