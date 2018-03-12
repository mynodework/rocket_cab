'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var role = sequelize.define("role", {
        idRole: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        roleName: DataTypes.STRING(45),
        roleDetails: DataTypes.STRING(64),
        modifiedBy: DataTypes.STRING(45),
        createdBy: DataTypes.STRING(45)
    }, {
        hooks: {},
        freezeTableName: true,
        createdAt: 'created',
        updatedAt: 'modified'
    });

    role.associate = function (models) {
        models.role.belongsTo(models.identityRelationship, { foreignKey: "identityRelationship", as: "role_identityRelationship" });
    };
    return role;
};
//# sourceMappingURL=role.js.map