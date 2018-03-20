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

var formProvider = function formProvider(validate, body, validationResult) {
    return new Promise(function (resolve, reject) {
        validate("form-id", "form-id Required field!!").notEmpty();
        validate("name", " name Required field!!").notEmpty();
        validate("company-id", "company-id Required field!!").notEmpty();
        validate("process-id", "process-id Required field!!").notEmpty();
        validate("interaction-id", " interaction-id Required field!!").notEmpty();
        validate("task-id", "task-id Required field!!").notEmpty();
        validate("creator", "creator Required field!!").notEmpty();
        validationResult.then(function (result) {
            if (!result.isEmpty()) {
                reject(result.array()[0].msg);
            } else {
                body['form-id'] = _crypto2.default.createHash("sha256").update(body['form-id'].toString()).digest("hex");
                resolve(body);
            }
        });
    });
};
exports.default = {
    BaseProvider: BaseProvider,
    formProvider: formProvider
};
//# sourceMappingURL=FormProvider.js.map