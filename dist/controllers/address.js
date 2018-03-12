"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AddressController = undefined;

var _BaseAPIController2 = require("./BaseAPIController");

var _BaseAPIController3 = _interopRequireDefault(_BaseAPIController2);

var _db = require("../db");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import companyProvider from '../providers/companyProvider';


var AddressController = exports.AddressController = function (_BaseAPIController) {
    _inherits(AddressController, _BaseAPIController);

    function AddressController() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AddressController);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddressController.__proto__ || Object.getPrototypeOf(AddressController)).call.apply(_ref, [this].concat(args))), _this), _this.addAddress = function (req, res, next) {
            _db2.default.address.create(req.body).then(function (response) {
                res.json(response);
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _this.getAllAddress = function (req, res, next) {
            _db2.default.address.findAll({}).then(function (response) {
                res.json(response);
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _this.updateAddress = function (req, res, next) {
            _db2.default.address.update(req.body, { where: { idaddress: req.body.idaddress } }).then(function (response) {
                res.json({ status: 1, data: response });
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _this.deleteAddress = function (req, res, next) {
            _db2.default.address.destroy({ where: { idaddress: req.params.idaddress } }).then(function (response) {
                res.json({ status: 1, message: "deleted", data: response });
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return AddressController;
}(_BaseAPIController3.default);

var controller = new AddressController();
exports.default = controller;
//# sourceMappingURL=address.js.map