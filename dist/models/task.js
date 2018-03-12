'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var task = sequelize.define("task", {
        idtask: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        name: DataTypes.STRING(1024),
        group: DataTypes.STRING(64),
        userID: DataTypes.STRING(64),
        companyID: DataTypes.STRING(64),
        reference: DataTypes.STRING(64),
        InstanceID: DataTypes.STRING(64),
        modifiedBy: DataTypes.STRING(45),
        createdBy: DataTypes.STRING(45)
    }, {
        hooks: {},
        freezeTableName: true,
        createdAt: 'created',
        updatedAt: 'updated'
    });

    task.assosiate = function (models) {};
    return task;
};
//# sourceMappingURL=task.js.map