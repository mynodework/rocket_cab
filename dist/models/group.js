"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var group = sequelize.define("group", {
        idGroup: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        groupName: DataTypes.STRING(45),
        groupDetails: DataTypes.STRING(128),
        updatedBy: DataTypes.STRING(45)
    }, {
        hooks: {
            beforeCreate: function beforeCreate(body) {
                var _this = this;

                return new Promise(function (resolve, reject) {
                    _this.findOne({
                        where: {
                            groupName: body.groupName
                        }
                    }).then(function (user) {
                        if (user) {
                            reject("group Already exist");
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

    group.associate = function (models) {
        models.identityRelationship.hasMany(models.group, { foreignKey: "ididentityRelationship", as: "identity_relationship" });
    };

    return group;
};
//# sourceMappingURL=group.js.map