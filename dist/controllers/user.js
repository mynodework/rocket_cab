"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserController = undefined;

var _BaseAPIController2 = require("./BaseAPIController");

var _BaseAPIController3 = _interopRequireDefault(_BaseAPIController2);

var _userProvider = require("../providers/userProvider");

var _userProvider2 = _interopRequireDefault(_userProvider);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _sendSMS = require("./../service/sendSMS");

var _sendSMS2 = _interopRequireDefault(_sendSMS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserController = exports.UserController = function (_BaseAPIController) {
    _inherits(UserController, _BaseAPIController);

    function UserController() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, UserController);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserController.__proto__ || Object.getPrototypeOf(UserController)).call.apply(_ref, [this].concat(args))), _this), _this.register = function (req, res, next) {
            _userProvider2.default.userRegistration(req.checkBody, req.body, req.getValidationResult()).then(function (body) {
                var val = Math.floor(1000 + Math.random() * 9000);
                body['OTPS'] = val;
                _sendSMS2.default.send(body.phone, body.OTPS).then(function (smsResponse) {
                    _this._db.userRegistration.create(body).then(function (response) {
                        res.json({ data: { id: response.id }, status: 1, message: 'success' });
                    }, function (err) {
                        return _this.handleErrorResponse(res, err);
                    });
                }, function (err) {
                    _this.handleErrorResponse(res, err);
                });
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _this.login = function (req, res, next) {
            _this._db.userRegistration.findOne({ where: { phone: req.body.phone } }).then(function (response) {
                if (response) {
                    res.json({ data: response, status: 1, message: 'success' });
                } else {
                    _this.handleErrorResponse(res, 'not found');
                }
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _this.verifyOTP = function (req, res, next) {
            _this._db.userRegistration.findOne({ where: { id: req.body.id, OTPS: req.body.otp } }).then(function (response) {
                if (response) {
                    res.json({ status: 1, message: 'success' });
                } else {
                    _this.handleErrorResponse(res, 'not found');
                }
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return UserController;
}(_BaseAPIController3.default);

var controller = new UserController();
exports.default = controller;
//# sourceMappingURL=user.js.map