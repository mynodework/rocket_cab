"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AccountController = undefined;

var _BaseAPIController2 = require("./BaseAPIController");

var _BaseAPIController3 = _interopRequireDefault(_BaseAPIController2);

var _db = require("../mongodb/db");

var _db2 = _interopRequireDefault(_db);

var _crypto = require("crypto");

var _crypto2 = _interopRequireDefault(_crypto);

var _FormProvider = require("../providers/FormProvider");

var _FormProvider2 = _interopRequireDefault(_FormProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccountController = exports.AccountController = function (_BaseAPIController) {
    _inherits(AccountController, _BaseAPIController);

    function AccountController() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AccountController);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AccountController.__proto__ || Object.getPrototypeOf(AccountController)).call.apply(_ref, [this].concat(args))), _this), _this.saveStructure = function (req, res, next) {
            req.body['form-id'] = new Date();
            _FormProvider2.default.formProvider(req.checkBody, req.body, req.getValidationResult()).then(function (body) {
                req.formStructure.create(body).then(function (response) {
                    res.json(response);
                }, function (err) {
                    return _this.handleErrorResponse(res, err);
                });
            }, function (err) {
                return _this.handleErrorResponse(res, err);
            });
        }, _this.updateStructure = function (req, res, next) {
            req.formStructure.update({ _id: req.params.mongo_id }, req.body).then(function (response) {
                res.json(response);
            });
        }, _this.getAllForms = function (req, res, next) {
            req.formStructure.find({}, { '_id': 1, 'name': 1, 'form-id': 1 }).then(function (response) {
                res.json(response);
            });
        }, _this.getFormById = function (req, res, next) {
            req.formStructure.findOne({ _id: req.params.mongo_id }).then(function (response) {
                req.formData.findOne({ 'form-id': req.params.form_id }).then(function (form_data) {
                    if (form_data && form_data._id) {
                        res.json({ formStructure: response, formData: form_data });
                    } else {
                        res.json({ formStructure: response, formData: [] });
                    }
                });
            });
        }, _this.updateFromData = function (req, res, next) {
            req.formData.update({ "form-id": req.params.mongo_id }, req.body).then(function (response) {
                res.json(response);
            });
        }, _this.insertFormData = function (req, res, next) {
            req.formData.create(req.body).then(function (data) {
                res.json(data);
            });
        }, _this.serachFromData = function (req, res, next) {
            var _req$params = req.params,
                order = _req$params.order,
                limit = _req$params.limit,
                page = _req$params.page,
                keyword = _req$params.keyword,
                sort = _req$params.sort;

            var mySort = {};
            mySort["" + sort] = order;
            var where = void 0;
            var query = {};
            if (keyword !== 'null') {
                where = [{ name: new RegExp(keyword, 'i') }, { 'process-id': new RegExp(keyword, 'i') }, { 'nteraction-id': new RegExp(keyword, 'i') }, { 'task-id': new RegExp(keyword, 'i') }, { 'creator': new RegExp(keyword, 'i') }, { 'company-id': new RegExp(keyword, 'i') }];
                query['$or'] = where;
            }
            req.formStructure.find(query).sort(mySort).skip((parseInt(page) - 1) * parseInt(limit)).limit(parseInt(limit)).then(function (data) {
                res.json({ items: data, count: req.count });
            }).catch(function (err) {
                console.log(err);
            });
        }, _this.deleteFormData = function (req, res, next) {
            var id = req.params.id;
            req.formStructure.remove({ _id: id }).then(function (response) {
                res.json(response);
            });
        }, _this.findAllCount = function (req, res, next) {
            var keyword = req.params.keyword;

            var where = void 0;
            var query = {};
            if (keyword !== 'null') {
                where = [{ name: new RegExp(keyword, 'i') }, { 'process-id': new RegExp(keyword, 'i') }, { 'nteraction-id': new RegExp(keyword, 'i') }, { 'task-id': new RegExp(keyword, 'i') }, { 'creator': new RegExp(keyword, 'i') }, { 'company-id': new RegExp(keyword, 'i') }];
                query['$or'] = where;
            }
            req.formStructure.find(query).count().then(function (data) {
                req.count = data;
                next();
            }).catch(function (err) {
                console.log(err);
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /*update structure*/


    /*get all forms*/

    /*get form by id*/


    /*update form data */


    /*Search form data*/


    /*Delete form data*/


    /*findAllCount*/


    return AccountController;
}(_BaseAPIController3.default);

var controller = new AccountController();
exports.default = controller;
//# sourceMappingURL=form.js.map