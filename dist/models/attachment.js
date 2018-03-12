'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var attachment = sequelize.define("attachment", {
        idattachment: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        type: DataTypes.STRING(128),
        description: DataTypes.STRING(256),
        location: DataTypes.STRING(256),
        companyID: DataTypes.STRING(256),
        role: DataTypes.STRING(64),
        purpose: DataTypes.STRING(256),
        createdBy: DataTypes.STRING(256),
        modifiedBy: DataTypes.STRING(64)
    }, {
        freezeTableName: true,
        createdAt: 'created',
        updatedAt: 'modified'
    });
    attachment.assosiation = function (models) {};
    return attachment;
};
//# sourceMappingURL=attachment.js.map