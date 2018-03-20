"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var userRegistration = sequelize.define("user_registration", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: true,
            unique: true
        },
        phone: {
            type: DataTypes.STRING(255),
            allowNull: true,
            primaryKey: true
        },
        token: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        OTPS: {
            type: DataTypes.INTEGER(5),
            allowNull: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        mail_verification: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        mail_statsus: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        user_pic: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    }, {
        indexes: [],
        freezeTableName: true,
        timestamps: false,
        hooks: {
            beforeCreate: function beforeCreate(body) {
                var _this = this;

                return new Promise(function (resolve, reject) {
                    _this.findOne({
                        where: {
                            phone: body.phone
                        }
                    }).then(function (user) {
                        if (user) {
                            reject("phone number already exist");
                        } else {
                            resolve();
                        }
                    });
                });
            }
        }
    });

    return userRegistration;
};
//# sourceMappingURL=userRegistration.js.map