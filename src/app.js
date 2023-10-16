const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");

const moviesRoutes = require("./routes/moviesRoutes");
const genresRoutes = require("./routes/genresRoutes");
const actorsRoutes = require("./routes/actorsRoutes");
const app = express();

/**VIEW ENGINE SETUP */
app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,"./views"));

app.use(express.static(path.resolve(__dirname,"../public")));
app.use(express.urlencoded({ extended: false }));

app.use("/",indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(actorsRoutes);

const PORT = 3003;
app.listen(PORT,() => {
    console.log(`Server is running in the port: ${PORT}`);
});