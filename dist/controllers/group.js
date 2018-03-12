'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GroupController = undefined;

var _BaseAPIController2 = require('./BaseAPIController');

var _BaseAPIController3 = _interopRequireDefault(_BaseAPIController2);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _groupProvider = require('../providers/groupProvider');

var _groupProvider2 = _interopRequireDefault(_groupProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroupController = exports.GroupController = function (_BaseAPIController) {
    _inherits(GroupController, _BaseAPIController);

    function GroupController() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GroupController);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GroupController.__proto__ || Object.getPrototypeOf(GroupController)).call.apply(_ref, [this].concat(args))), _this), _this.addGroup = function (req, res, next) {
            _groupProvider2.default.provideGroup(req.checkBody, req.body, req.getValidationResult()).then(function (body) {
                _db2.default.group.create(req.body).then(function (response) {
                    res.json({ status: 1, data: response });
                }, function (err) {
                    return _this.handleErrorResponse(res, err);
                });
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _this.getAllGroup = function (req, res, next) {
            _db2.default.group.findAll({}).then(function (response) {
                res.json({ status: 1, data: response });
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _this.updateGroup = function (req, res, next) {
            _db2.default.group.update(req.body, { where: { idGroup: req.body.idGroup } }).then(function (response) {
                res.json({ status: 1, data: response });
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _this.deleteGroup = function (req, res, next) {
            _db2.default.group.destroy({ where: { idGroup: req.params.idGroup } }).then(function (response) {
                res.json({ status: 1, message: "deleted", data: response });
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return GroupController;
}(_BaseAPIController3.default);

var controller = new GroupController();
exports.default = controller;
//# sourceMappingURL=group.js.map