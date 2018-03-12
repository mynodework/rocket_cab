"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _address = require("../controllers/address");

var _address2 = _interopRequireDefault(_address);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {

    /* Routes for add address */
    app.route("/address/addAddress").post(_address2.default.addAddress);

    app.route("/address/getAllAddress").get(_address2.default.getAllAddress);

    app.route("/address/updateAddress").put(_address2.default.updateAddress);

    app.route("/address/deleteAddress/:idaddress").delete(_address2.default.deleteAddress);

    return app;
};
//# sourceMappingURL=address.js.map