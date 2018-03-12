'use strict';

var _environment = require('../environment.js');

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';


var db = {};

var sequelize = new Sequelize("", _environment2.default.config.db.username, _environment2.default.config.db.password, { port: 3306, host: _environment2.default.config.db.host, dialect: 'mysql' });

sequelize.query('CREATE DATABASE IF NOT EXISTS ' + _environment2.default.config.db.name).then(function () {
    console.log('db created');
});

module.exports = db;
//# sourceMappingURL=index.js.map