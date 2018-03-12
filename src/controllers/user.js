import BaseAPIController from "./BaseAPIController";
import userProvider from '../providers/userProvider';
import _ from "lodash";

export class UserController extends BaseAPIController {

    addUser = (req, res, next) => {
        userProvider.provideUser(req.checkBody, req.body, req.getValidationResult()).then((body) => {
                // db.user.create(body).then((response) => {
                //     res.json({ data: response, status: 1 })
                // }, (err) => this.handleErrorResponse(res, err))
        }, (err) => this.handleErrorResponse(res, err))
    }

    getAllUser = (req, res, next) => {
    	this._db.query('SELECT * from user', function (err, rows, fields) {
		  if (err) throw err

		  console.log('The solution is: ', rows)
		})
    }
}

const controller = new UserController();
export default controller;