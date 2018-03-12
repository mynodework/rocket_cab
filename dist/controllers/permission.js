'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PermissionController = undefined;

var _BaseAPIController2 = require('./BaseAPIController');

var _BaseAPIController3 = _interopRequireDefault(_BaseAPIController2);

var _permissionProvider = require('../providers/permissionProvider');

var _permissionProvider2 = _interopRequireDefault(_permissionProvider);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PermissionController = exports.PermissionController = function (_BaseAPIController) {
    _inherits(PermissionController, _BaseAPIController);

    function PermissionController() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PermissionController);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PermissionController.__proto__ || Object.getPrototypeOf(PermissionController)).call.apply(_ref, [this].concat(args))), _this), _this.addPermission = function (req, res, next) {
            _permissionProvider2.default.providePermissiosn(req.checkBody, req.body, req.getValidationResult()).then(function (body) {
                _db2.default.permission.create(req.body).then(function (response) {
                    res.json({ status: 1, data: response });
                }, function (err) {
                    return _this.handleErrorResponse(res, err);
                });
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _this.getAllPermission = function (req, res, next) {
            _db2.default.permission.findAll({}).then(function (response) {
                res.json({ status: 1, data: response });
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _this.updatePermission = function (req, res, next) {
            _db2.default.permission.update(req.body, { where: { idPermission: req.body.idPermission } }).then(function (response) {
                res.json({ status: 1, data: response });
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _this.deletePermission = function (req, res, next) {
            _db2.default.permission.destroy({ where: { idPermission: req.params.idPermission } }).then(function (response) {
                res.json({ status: 1, message: "deleted", data: response });
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return PermissionController;
}(_BaseAPIController3.default);

var controller = new PermissionController();
exports.default = controller;
//# sourceMappingURL=permission.js.map