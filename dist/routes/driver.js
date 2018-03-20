"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _driver = require("../controllers/driver");

var _driver2 = _interopRequireDefault(_driver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
    /* Routes for user */
    app.route("/driver/register").post(_driver2.default.register);

    return app;
};
//# sourceMappingURL=driver.js.map