"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var driverReg = sequelize.define("driver_reg", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        f_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        l_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        mobile: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        profile_pic: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        city: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        dob: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        otp: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cre_time: {
            type: DataTypes.DATE,
            allowNull: true
        },
        driving_lincense_number: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        expiry_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        working: {
            type: DataTypes.TINYINT(1),
            allowNull: false
        },
        token: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        active: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        mobile_verfication: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        indexes: [],
        freezeTableName: true,
        timestamps: true,
        updatedAt: 'cre_time',
        createdAt: false
    });

    return driverReg;
};
//# sourceMappingURL=driver_reg.js.map