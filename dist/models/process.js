'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var process_table = sequelize.define("process", {
        idprocess: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        processName: DataTypes.STRING(45),
        instanceID: DataTypes.STRING(64),
        modifiedBy: DataTypes.STRING(45),
        createdBy: DataTypes.STRING(45)
    }, {
        hooks: {},
        freezeTableName: true,
        createdAt: 'created',
        updatedAt: 'modified'
    });

    process_table.associate = function (models) {
        models.user.hasMany(models.process_table, { foreignKey: 'userID' });
    };

    return process_table;
};
//# sourceMappingURL=process.js.map