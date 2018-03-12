"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _form = require("../controllers/form");

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {

    /* Route for add form */
    app.route("/form/formStructure").post(_form2.default.saveStructure);

    /* Route for Update form */
    app.route("/form/update/:mongo_id").put(_form2.default.updateStructure);

    /*Route for fetching all forms structure*/
    app.route("/form/fetch").get(_form2.default.getAllForms);

    /*Route for fetching by id*/
    app.route("/form/fetchById/:mongo_id/:form_id").get(_form2.default.getFormById);

    /*Route for saving form data*/
    app.route("/form/updateData/:mongo_id").put(_form2.default.updateFromData);

    /*Route For insert*/
    app.route("/form/insertFormData").post(_form2.default.insertFormData);

    /*Route for serach form*/
    app.route("/form/search/:order/:page/:limit/:keyword/:sort").get(_form2.default.serachFromData);

    /*Route for remove form*/
    app.route("/form/delete/:id").delete(_form2.default.deleteFormData);

    /*get count of all data*/
    app.param('page', _form2.default.findAllCount);

    return app;
};
//# sourceMappingURL=form.js.map