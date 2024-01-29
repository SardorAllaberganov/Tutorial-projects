const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const sequelize = require("./utils/database");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const routes = require("./router/routes");
app.use(routes);

sequelize
    .sync()
    .then((result) => {
        // console.log(result);
    })
    .then(() => {
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });
