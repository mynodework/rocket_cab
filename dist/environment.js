"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var db = void 0;
var config = void 0;
if (process.env.ENV == "dev") {
    db = "mongodb://localhost/angular2form"; // local db
    config = {
        "port": 8091,
        "bodyLimit": "100kb",
        "corsHeaders": ["Link"],
        "db": {
            "host": "127.0.0.1",
            "name": "user_profile",
            "password": "root",
            "username": "root"
        }
    };
} else {
    db = 'mongodb://root:java1234@ds113636.mlab.com:13636/angular2form'; //mlab connection
    config = {
        "port": 8091,
        "bodyLimit": "100kb",
        "corsHeaders": ["Link"],
        "db": {
            "host": "taskular-aws-db-test-01.cwc36zpzizgz.ap-southeast-2.rds.amazonaws.com:3306",
            "name": "dashboard",
            "password": "8a9xWGMamzam",
            "username": "ravi"
        }
    };
}

exports.default = {
    db: db,
    config: config
};
//# sourceMappingURL=environment.js.map