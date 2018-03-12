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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserController.__proto__ || Object.getPrototypeOf(UserController)).call.apply(_ref, [this].concat(args))), _this), _this.addUser = function (req, res, next) {
            _userProvider2.default.provideUser(req.checkBody, req.body, req.getValidationResult()).then(function (body) {
                // db.user.create(body).then((response) => {
                //     res.json({ data: response, status: 1 })
                // }, (err) => this.handleErrorResponse(res, err))
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _this.getAllUser = function (req, res, next) {
            _this._db.query('SELECT * from user', function (err, rows, fields) {
                if (err) throw err;

                console.log('The solution is: ', rows);
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return UserController;
}(_BaseAPIController3.default);

var controller = new UserController();
exports.default = controller;
//# sourceMappingURL=user.js.map