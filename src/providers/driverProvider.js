import * as BaseProvider from "./BaseProvider";
import util from "util";
import crypto from "crypto";

const driverRegistration = (validate, body, validationResult) => {
    return new Promise((resolve, reject) => {
        validate("f_name", "first name Required field!!").notEmpty();
        validate("l_name", "last name Required field!!").notEmpty();
        validate("mobile", "mobile Required field!!").notEmpty();
        validate("profile_pic", "profile pic  Required field!!").notEmpty();
        validate("city", "city Required field!!").notEmpty();
        validate("dob", "dob Required field!!").notEmpty();
        validate("driving_lincense_number", "driving lincense number Required field!!").notEmpty();
        validate("working", "working Required field!!").notEmpty();
        validationResult.then(function(result) {
            if (!result.isEmpty()) {
                reject(result.array()[0].msg);
            } else {
                resolve(body);
            }
        });
    });
};


export default {
    BaseProvider,
    driverRegistration
};