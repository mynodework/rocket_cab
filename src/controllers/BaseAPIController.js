import errorHandler from "../lib/util";
import db from '../db';

export default class BaseAPIController {
	constructor() {
		this._db = db.connection;
	}
    handleErrorResponse(res, err, next) {
        res.status(400).send(errorHandler(err));
    }

    handleSuccessResponse(res, next) {
        res.json({
            status: "SUCCESS"
        });
    }
}
