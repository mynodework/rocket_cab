'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var address = sequelize.define("address", {
        idaddress: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: DataTypes.STRING(128),
        address1: DataTypes.STRING(256),
        address2: DataTypes.STRING(256),
        suburb: DataTypes.STRING(256),
        postcode: DataTypes.STRING(64),
        state: DataTypes.STRING(256),
        country: DataTypes.STRING(256),
        address3: DataTypes.STRING(64),
        streetNumber: DataTypes.STRING(64),
        createdBy: DataTypes.STRING(64),
        modifiedBy: DataTypes.STRING(64),
        addresscol: DataTypes.STRING(45)
    }, {
        freezeTableName: true,
        createdAt: 'created',
        updatedAt: 'modified'
    });
    address.assosiate = function (models) {
        models.company.belongsTo(models.address, { foreignKey: 'address' });
    };
    return address;
};
//# sourceMappingURL=address.js.map