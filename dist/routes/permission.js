"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _permission = require("../controllers/permission");

var _permission2 = _interopRequireDefault(_permission);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {

    /* Routes for permission */

    app.route("/permission/addPermission").post(_permission2.default.addPermission);

    app.route("/permission/getAllPermission").get(_permission2.default.getAllPermission);

    app.route("/permission/updatePermission").put(_permission2.default.updatePermission);

    app.route("/permission/deletePermission/:idPermission").delete(_permission2.default.deletePermission);

    return app;
};
//# sourceMappingURL=permission.js.map