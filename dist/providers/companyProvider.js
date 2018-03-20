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

var _v = require("uuid/v4");

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var provideCompany = function provideCompany(validate, body, validationResult) {
    return new Promise(function (resolve, reject) {
        validate("companyName", " companyName Required field!!").notEmpty();
        // validate("companyAdmin", "companyAdmin Required field!!").notEmpty();
        validate("address", "address Required field!!").notEmpty();
        validate("dob", "dob Required field!!").notEmpty();
        validate("modifiedBy", "modifiedBy Required field!!").notEmpty();
        // validate("companyId", "companyId Required field!!").notEmpty();
        validate("billingAddress", "billingAddress Required field!!").notEmpty();
        validate("mailingAddress", "mailingAddress Required field!!").notEmpty();
        validate("email", "email Required field!!").notEmpty();
        // validate("userid", "userid Required field!!").notEmpty();
        // validate("lastLogin", "lastLogin Required field!!").notEmpty();
        validate("loginLocation", "loginLocation Required field!!").notEmpty();
        validate("homePhone", "homePhone Required field!!").notEmpty();
        validate("businessPhone", "businessPhone Required field!!").notEmpty();
        validate("mobilePhone", "mobilePhone Required field!!").notEmpty();
        validationResult.then(function (result) {
            if (!result.isEmpty()) {
                reject(result.array()[0].msg);
            } else {
                body['idcompany'] = (0, _v2.default)();
                resolve(body);
            }
        });
    });
};

var updateCompany = function updateCompany(validate, body, validationResult) {
    return new Promise(function (resolve, reject) {
        body['address'] = [body.address, body.billingAddress, body.mailingAddress];
        delete body.billingAddress;
        delete body.mailingAddress;
        resolve(body);
    });
};
exports.default = {
    BaseProvider: BaseProvider,
    provideCompany: provideCompany,
    updateCompany: updateCompany
};
//# sourceMappingURL=companyProvider.js.map