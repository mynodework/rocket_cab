'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var user = sequelize.define("user", {
        idCustomer: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: DataTypes.STRING(256),
        surname: DataTypes.STRING(256),
        salutation: DataTypes.STRING(32),
        address: DataTypes.INTEGER,
        dob: DataTypes.DATE,
        modifiedBy: DataTypes.STRING(64),
        companyId: DataTypes.STRING(64),
        billingAddress: DataTypes.INTEGER,
        mailingAddress: DataTypes.INTEGER,
        email: DataTypes.STRING(2048),
        userid: DataTypes.STRING(2048),
        lastLogin: DataTypes.DATE,
        loginLocation: DataTypes.STRING(256),
        homePhone: DataTypes.STRING(64),
        businessPhone: DataTypes.STRING(64),
        mobilePhone: DataTypes.STRING(64),
        communicationMethod: DataTypes.STRING(64),
        createdBy: DataTypes.STRING(64),
        active: DataTypes.STRING(32),
        pitcture: DataTypes.INTEGER,
        identityRelationship: DataTypes.INTEGER,
        password: {
            type: DataTypes.STRING(64),
            allowNull: false
        }
    }, {
        indexes: [{
            fields: [{ attribute: 'address', order: 'ASC' }]
        }, {
            fields: [{ attribute: 'billingAddress', order: 'ASC' }]
        }, {
            fields: [{ attribute: 'mailingAddress', order: 'ASC' }]
        }, {
            fields: [{ attribute: 'identityRelationship', order: 'ASC' }]
        }],
        freezeTableName: true,
        createdAt: 'created',
        updatedAt: 'modified',
        hooks: {
            beforeCreate: function beforeCreate(body) {
                var _this = this;

                return new Promise(function (resolve, reject) {
                    _this.findOne({
                        where: {
                            email: body.email
                        }
                    }).then(function (user) {
                        if (user) {
                            reject("user already exist");
                        } else {
                            resolve();
                        }
                    });
                });
            }
        }
    });

    user.associate = function (models) {
        models.process_table.belongsTo(models.user, { foreignKey: 'userID' });
    };

    user.getCompanyUsers = function (companyId) {
        return new Promise(function (resolve, reject) {
            user.findAll({ where: { companyId: companyId } }).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                return reject(err);
            });
        });
    };

    return user;
};
//# sourceMappingURL=user.js.map