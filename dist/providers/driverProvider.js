"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BaseProvider = require("./BaseProvider");

var BaseProvider = _interopRequireWildcard(_BaseProvider);

var _util = require("util");

var _util2 = _interopRequireDefault(_util);

var _crypto = require("crypto");

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var driverRegistration = function driverRegistration(validate, body, validationResult) {
    return new Promise(function (resolve, reject) {
        validate("f_name", "first name Required field!!").notEmpty();
        validate("l_name", "last name Required field!!").notEmpty();
        validate("mobile", "mobile Required field!!").notEmpty();
        validate("profile_pic", "profile pic  Required field!!").notEmpty();
        validate("city", "city Required field!!").notEmpty();
        validate("dob", "dob Required field!!").notEmpty();
        validate("otp", "otp Required field!!").notEmpty();
        validate("driving_lincense_number", "driving lincense number Required field!!").notEmpty();
        validate("working", "working Required field!!").notEmpty();
        validate("token", "token Required field!!").notEmpty();
        validationResult.then(function (result) {
            if (!result.isEmpty()) {
                reject(result.array()[0].msg);
            } else {
                resolve(body);
            }
        });
    });
};

exports.default = {
    BaseProvider: BaseProvider,
    driverRegistration: driverRegistration
};
//# sourceMappingURL=driverProvider.js.map