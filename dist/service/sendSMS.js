"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var send = function send(mobileNumber, otp) {
    console.log(mobileNumber, otp);
    return new Promise(function (resolve, reject) {
        _request2.default.get("https://2factor.in/API/V1/d18e6ac6-f07f-11e7-a328-0200cd936042/SMS/" + mobileNumber + "/" + otp, function (err, response) {
            resolve({ status: 1, data: "successfully send otp!" });
        });
    });
};

exports.default = {
    send: send
};
//# sourceMappingURL=sendSMS.js.map