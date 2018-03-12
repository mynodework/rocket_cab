"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _glob = require("glob");

var _glob2 = _interopRequireDefault(_glob);

var _expressValidator = require("express-validator");

var _expressValidator2 = _interopRequireDefault(_expressValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config({ path: __dirname + "/process.env" }); /* eslint-disable*/


var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);
// logger
app.use((0, _cors2.default)());

app.use(_bodyParser2.default.json({
    limit: process.env.BODYLIMIT
}));
app.use(_bodyParser2.default.urlencoded({
    extended: true
}));

app.use((0, _expressValidator2.default)());

var initRoutes = function initRoutes(app) {
    // including all routes
    (0, _glob2.default)("./routes/*.js", {
        cwd: _path2.default.resolve("./src")
    }, function (err, routes) {
        if (err) {
            console.log("Error occured including routes");
            return;
        }
        routes.forEach(function (routePath) {
            require(routePath).default(app); // eslint-disable-line
        });
        console.log("included " + routes.length + " route files");
    });
};

initRoutes(app);
app.server.listen(process.env.PORT);
console.log("Started on port " + app.server.address().port);
exports.default = app;
//# sourceMappingURL=index.js.map