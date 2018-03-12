'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var identityRelationship = sequelize.define("identityRelationship", {
        ididentityRelationship: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        type: DataTypes.STRING(256),
        status: DataTypes.STRING(45),
        relationshipKey: DataTypes.STRING(256),
        updatedBy: DataTypes.STRING(45),
        createdBy: DataTypes.STRING(45)
    }, {
        hooks: {},
        freezeTableName: true,
        createdAt: 'created',
        updatedAt: 'updated'
    });
    return identityRelationship;
};
//# sourceMappingURL=identityRelationship.js.map