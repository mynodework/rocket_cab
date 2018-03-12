'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connection = _mysql2.default.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
});

connection.connect(function (err) {
    if (err) throw err;
});

exports.default = {
    connection: connection
};
//# sourceMappingURL=db.js.map