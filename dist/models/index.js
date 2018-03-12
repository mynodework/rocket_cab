"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _identityRelationship = require("./identityRelationship");

var _identityRelationship2 = _interopRequireDefault(_identityRelationship);

var _task = require("./task");

var _task2 = _interopRequireDefault(_task);

var _process = require("./process");

var _process2 = _interopRequireDefault(_process);

var _company = require("./company.js");

var _company2 = _interopRequireDefault(_company);

var _user = require("./user.js");

var _user2 = _interopRequireDefault(_user);

var _address = require("./address.js");

var _address2 = _interopRequireDefault(_address);

var _permission = require("./permission.js");

var _permission2 = _interopRequireDefault(_permission);

var _group = require("./group.js");

var _group2 = _interopRequireDefault(_group);

var _attachment = require("./attachment");

var _attachment2 = _interopRequireDefault(_attachment);

var _billingAccount = require("./billingAccount");

var _billingAccount2 = _interopRequireDefault(_billingAccount);

var _form = require("./form");

var _form2 = _interopRequireDefault(_form);

var _role = require("./role");

var _role2 = _interopRequireDefault(_role);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    company: _company2.default,
    billingAccount: _billingAccount2.default,
    task: _task2.default,
    user: _user2.default,
    address: _address2.default,
    permission: _permission2.default,
    group: _group2.default,
    process_table: _process2.default,
    attachment: _attachment2.default,
    form: _form2.default,
    role: _role2.default,
    identityRelationship: _identityRelationship2.default
};
//# sourceMappingURL=index.js.map