"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _company = require("../controllers/company");

var _company2 = _interopRequireDefault(_company);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {

    /* Routes for add company */
    app.route("/company/addCompany").post(_company2.default.addCompany);

    app.route("/company/getAllCompany").get(_company2.default.getAllCompany);

    app.route("/company/updateCompany").put(_company2.default.updateCompany);

    app.route("/company/deleteCompany/:idcompany").delete(_company2.default.deleteCompany);

    return app;
};
//# sourceMappingURL=company.js.map