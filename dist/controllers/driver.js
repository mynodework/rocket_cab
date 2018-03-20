"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DriverController = undefined;

var _BaseAPIController2 = require("./BaseAPIController");

var _BaseAPIController3 = _interopRequireDefault(_BaseAPIController2);

var _driverProvider = require("../providers/driverProvider");

var _driverProvider2 = _interopRequireDefault(_driverProvider);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _sendSMS = require("./../service/sendSMS");

var _sendSMS2 = _interopRequireDefault(_sendSMS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DriverController = exports.DriverController = function (_BaseAPIController) {
    _inherits(DriverController, _BaseAPIController);

    function DriverController() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DriverController);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DriverController.__proto__ || Object.getPrototypeOf(DriverController)).call.apply(_ref, [this].concat(args))), _this), _this.register = function (req, res, next) {
            _driverProvider2.default.driverRegistration(req.checkBody, req.body, req.getValidationResult()).then(function (body) {
                console.log("body***************", body);
                // var val = Math.floor(1000 + Math.random() * 9000);
                // body['OTPS'] = val;
                // sendSMS.send(body.phone, body.OTPS).then((smsResponse) => {
                _this._db.driverReg.create(body).then(function (response) {
                    res.json({ data: response, status: 1, message: 'success' });
                }, function (err) {
                    return _this.handleErrorResponse(res, err);
                });
            }, function (err) {
                _this.handleErrorResponse(res, err);
            });
            // }, (err) => this.handleErrorResponse(res, err))
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return DriverController;
}(_BaseAPIController3.default);

var controller = new DriverController();
exports.default = controller;
//# sourceMappingURL=driver.js.map