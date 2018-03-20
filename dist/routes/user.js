"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = require("../controllers/user");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {

    /* Routes for user */

    app.route("/user/register").post(_user2.default.register);

    app.route("/user/login").post(_user2.default.login);

    app.route("/user/verifyOTP").post(_user2.default.verifyOTP);

    return app;
};
//# sourceMappingURL=user.js.map