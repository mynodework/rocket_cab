"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = require("../controllers/user");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {

    /* Routes for add user */

    app.route("/user/addUser").post(_user2.default.addUser);
    app.route("/user/getAllUser").get(_user2.default.getAllUser);

    return app;
};
//# sourceMappingURL=user.js.map