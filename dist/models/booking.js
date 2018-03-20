"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var booking = sequelize.define("booking", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        driver_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        main_fare: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bargain_fare: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        booking_status: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        times: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        pickup: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        drops: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        cashType: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        indexes: [],
        freezeTableName: true,
        timestamps: false,
        hooks: {}
    });

    return booking;
};
//# sourceMappingURL=booking.js.map