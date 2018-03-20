'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var form = sequelize.define("form", {
        idform: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        type: DataTypes.STRING(256),
        description: DataTypes.STRING(4096),
        referenceID: DataTypes.STRING(64),
        status: DataTypes.STRING(45),
        data: DataTypes.STRING(64),
        modifiedBy: DataTypes.STRING(45),
        createdBy: DataTypes.STRING(45)
    }, {
        hooks: {},
        freezeTableName: true,
        createdAt: 'created',
        updatedAt: 'updated'
    });

    form.assosiate = function (models) {};
    return form;
};
//# sourceMappingURL=form.js.map