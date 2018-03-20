"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var fareTable = sequelize.define("fare_tabl", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Category: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Base_Fare: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        Distance: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        car_model_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    }, {
        indexes: [],
        freezeTableName: true,
        timestamps: false,
        hooks: {}
    });

    return fareTable;
};
//# sourceMappingURL=fareTabl.js.map