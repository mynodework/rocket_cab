/* eslint-disable*/
import http from "http";
import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import glob from "glob";
import expressValidator from "express-validator";
require('dotenv').config({path: `${__dirname}/process.env`})

const app = express();
app.server = http.createServer(app);
// logger
app.use(cors());

app.use(bodyParser.json({
    limit: process.env.BODYLIMIT
}));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(expressValidator());

const initRoutes = (app) => {
    // including all routes
    glob("./routes/*.js", {
        cwd: path.resolve("./src")
    }, (err, routes) => {
        if (err) {
            console.log("Error occured including routes");
            return;
        }
        routes.forEach((routePath) => {
            require(routePath).default(app); // eslint-disable-line
        });
        console.log("included " + routes.length + " route files");
    });
};

initRoutes(app);
app.server.listen(process.env.PORT);
console.log("Started on port " + app.server.address().port);
export default app;