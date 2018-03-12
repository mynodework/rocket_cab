"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _group = require("../controllers/group");

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {

    /* Routes for group */

    app.route("/group/addGroup").post(_group2.default.addGroup);

    app.route("/group/getAllGroup").get(_group2.default.getAllGroup);

    app.route("/group/updateGroup").put(_group2.default.updateGroup);

    app.route("/group/deleteGroup/:idGroup").delete(_group2.default.deleteGroup);

    return app;
};
//# sourceMappingURL=group.js.map