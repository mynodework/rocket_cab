"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

var _environment = require("../environment.js");

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = _bluebird2.default;


var conn = _mongoose2.default.createConnection(_environment2.default);

// the middleware function
module.exports = function () {

    // create schema
    var formStructure = _mongoose2.default.Schema({}, {
        collection: "formStructure",
        strict: false,
        timestamps: true
    });

    var formData = _mongoose2.default.Schema({}, {
        collection: "formData",
        strict: false,
        timestamps: true
    });

    var form = conn.model("STRUCTURE", formStructure);
    var form_data = conn.model("FORMDATA", formData);
    return function (req, res, next) {
        req.formStructure = form;
        req.formData = form_data;
        next();
    };
};
//# sourceMappingURL=db.js.map