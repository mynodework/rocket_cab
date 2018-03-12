"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var permission = sequelize.define("permission", {
        idPermission: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        permissionName: DataTypes.STRING(45),
        permissionDetails: DataTypes.STRING(128),
        updatedBy: DataTypes.STRING(45),
        createdBy: DataTypes.STRING(45)
    }, {
        hooks: {
            beforeCreate: function beforeCreate(body) {
                var _this = this;

                return new Promise(function (resolve, reject) {
                    _this.findOne({
                        where: {
                            permissionName: body.permissionName
                        }
                    }).then(function (user) {
                        if (user) {
                            reject("permission Already exist");
                        } else {
                            resolve();
                        }
                    });
                });
            }
        },
        freezeTableName: true,
        createdAt: 'created',
        updatedAt: 'updated'
    });
    permission.associate = function (models) {
        models.identityRelationship.hasMany(models.permission, { foreignKey: "ididentityRelationship", as: "permission_identityRelationship" });
    };

    return permission;
};
//# sourceMappingURL=permission.js.map