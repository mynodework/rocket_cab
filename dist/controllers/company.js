'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CompanyController = undefined;

var _BaseAPIController2 = require('./BaseAPIController');

var _BaseAPIController3 = _interopRequireDefault(_BaseAPIController2);

var _companyProvider = require('../providers/companyProvider');

var _companyProvider2 = _interopRequireDefault(_companyProvider);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompanyController = exports.CompanyController = function (_BaseAPIController) {
    _inherits(CompanyController, _BaseAPIController);

    function CompanyController() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CompanyController);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CompanyController.__proto__ || Object.getPrototypeOf(CompanyController)).call.apply(_ref, [this].concat(args))), _this), _this.addCompany = function (req, res, next) {
            _companyProvider2.default.provideCompany(req.checkBody, req.body, req.getValidationResult()).then(function (body) {
                _db2.default.address.bulkCreate([body.address, body.billingAddress, body.mailingAddress]).then(function (address_response) {
                    body.address = _lodash2.default.filter(address_response, function (filtered_data) {
                        return filtered_data.dataValues.type == "address";
                    })[0].dataValues.idaddress;
                    body.billingAddress = _lodash2.default.filter(address_response, function (filtered_data) {
                        return filtered_data.dataValues.type == "billingAddress";
                    })[0].dataValues.idaddress;
                    body.mailingAddress = _lodash2.default.filter(address_response, function (filtered_data) {
                        return filtered_data.dataValues.type == "mailingAddress";
                    })[0].dataValues.idaddress;
                    _db2.default.company.create(body).then(function (response) {
                        res.json({ status: 1, message: "success", data: response });
                    }, function (err) {
                        return _this.handleErrorResponse(res, err);
                    });
                });
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _this.getAllCompany = function (req, res, next) {
            _db2.default.company.getCompanies(_db2.default).then(function (response) {
                res.json({ status: 1, data: response });
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _this.updateCompany = function (req, res, next) {
            _companyProvider2.default.updateCompany(req.checkBody, req.body, req.getValidationResult()).then(function (body) {
                updateAddress(body.address, function (address_updated) {
                    var _this2 = this;

                    delete body.address;
                    var company_id = body.idcompany;
                    delete body.idcompany;
                    _db2.default.company.update(body, { where: { idcompany: company_id } }).then(function (updated_company_info) {
                        res.json({ status: 1, message: "Company details updated" });
                    }, function (err) {
                        return _this2.handleErrorResponse(res, err);
                    });
                }, function (err) {
                    return _this.handleErrorResponse(res, err);
                });
            });
            var updateAddress = function updateAddress(address_data, callback) {
                var address_info = address_data.splice(0, 1)[0];
                var address_id = address_info.idaddress;
                delete address_info.idaddress;
                _db2.default.address.update(address_info, { where: { idaddress: address_id } }).then(function (response) {
                    if (address_data.length) {
                        updateAddress(address_data, callback);
                    } else {
                        callback(response);
                    }
                }, function (err) {
                    return _this.handleErrorResponse(res, err);
                });
            };
        }, _this.deleteCompany = function (req, res, next) {
            _db2.default.company.destroy({ where: { idcompany: req.params.idcompany } }).then(function (response) {
                res.json({ status: 1, message: "deleted", data: response });
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _this.getComapnyBbyId = function (req, res, next) {
            _db2.default.company.findById(re);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return CompanyController;
}(_BaseAPIController3.default);

var controller = new CompanyController();
exports.default = controller;
//# sourceMappingURL=company.js.map