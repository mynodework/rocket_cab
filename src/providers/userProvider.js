import * as BaseProvider from "./BaseProvider";
import util from "util";
import crypto from "crypto";

const userRegistration = (validate, body, validationResult) => {
    return new Promise((resolve, reject) => {
        validate("phone", "phone Required field!!").notEmpty();
        validate("token", "token Required field!!").notEmpty();
        // validate("OTPS", "token Required field!!").notEmpty();
        // validate("name", "token Required field!!").notEmpty();
        // validate("email", "token Required field!!").notEmpty();
        // validate("password", "token Required field!!").notEmpty();
        // validate("mail_verification", "token Required field!!").notEmpty();
        // validate("mail_statsus", "token Required field!!").notEmpty();
        // validate("user_pic", "token Required field!!").notEmpty();
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
    userRegistration
};