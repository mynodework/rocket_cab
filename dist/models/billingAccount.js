'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var billingAccount = sequelize.define("billingAccount", {
        idaccount: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        type: DataTypes.STRING(256),
        currency: DataTypes.STRING(256),
        modifiedBy: DataTypes.STRING(64),
        /*address: DataTypes.STRING(256),
        billingAddress: DataTypes.STRING(256),
        mailingAddress: DataTypes.STRING(256),
        companyId: DataTypes.STRING(64),*/
        email: DataTypes.STRING(2048),
        userid: DataTypes.STRING(2048),
        lastLogin: DataTypes.DATE,
        loginLocation: DataTypes.STRING(256),
        homePhone: DataTypes.STRING(64),
        businessPhone: DataTypes.STRING(64),
        mobilePhone: DataTypes.STRING(64),
        communicationMethod: DataTypes.STRING(64),
        createdBy: DataTypes.STRING(64)
    }, {
        freezeTableName: true,
        createdAt: 'created',
        updatedAt: 'modified'

    });

    billingAccount.assosiate = function (models) {};

    return billingAccount;
};
//# sourceMappingURL=billingAccount.js.map