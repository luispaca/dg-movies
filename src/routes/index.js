const { Router } = require("express");
const router = Router();

/**HOME PAGE */
router.get("/",(req,res)=>{
    res.render("index",{  title:"Digital House" });
});

module.exports= router;