import BaseAPIController from "./BaseAPIController";
import driverProvider from '../providers/driverProvider';
import _ from "lodash";
import sendSMS from './../service/sendSMS';

export class DriverController extends BaseAPIController {

    register = (req, res, next) => {
        driverProvider.driverRegistration(req.checkBody, req.body, req.getValidationResult()).then((body) => {
            this._db.driverReg.create(body).then((response) => {
                res.json({ data: response, status: 1, message: 'success' });
            }, (err) => this.handleErrorResponse(res, err))
        }, (err) => {
            this.handleErrorResponse(res, err)
        })
    }
}

const controller = new DriverController();
export default controller;