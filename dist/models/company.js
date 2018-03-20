"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (sequelize, DataTypes) {
    var company = sequelize.define("company", {
        idcompany: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        companyName: DataTypes.STRING(256),
        companyAdmin: DataTypes.INTEGER,
        address: DataTypes.INTEGER,
        modifiedBy: DataTypes.STRING(64),
        companyId: DataTypes.STRING(2048),
        billingAddress: DataTypes.INTEGER,
        mailingAddress: DataTypes.INTEGER,
        email: DataTypes.STRING(512),
        userID: DataTypes.INTEGER,
        lastLogin: DataTypes.DATE,
        loginLocation: DataTypes.STRING(64),
        businessPhone: DataTypes.STRING(64),
        websiteURL: DataTypes.STRING(512),
        knowledgebase: DataTypes.STRING(2048),
        logo: DataTypes.STRING(64)
    }, {

        indexes: [],
        hooks: {
            beforeCreate: function beforeCreate(body) {
                var _this = this;

                return new Promise(function (resolve, reject) {
                    _this.findOne({
                        where: {
                            companyName: body.companyName
                        }
                    }).then(function (user) {
                        if (user) {
                            reject("company Already exist");
                        } else {
                            resolve();
                        }
                    });
                });
            }
        },
        freezeTableName: true,
        createdAt: 'created',
        updatedAt: 'modified'
    });

    company.associate = function (models) {
        models.billingAccount.belongsTo(models.address, { foreignKey: 'address', as: 'billingAccount_address' });

        models.billingAccount.belongsTo(models.address, { foreignKey: 'billingAddress', as: 'billingAccount_billingAddress' });

        models.billingAccount.belongsTo(models.address, { foreignKey: 'mailingAddress', as: 'billingAccount_mailingAddress' });

        models.billingAccount.belongsTo(models.attachment, { foreignKey: 'logo' });

        models.user.hasMany(models.company, { foreignKey: 'companyAdmin', as: 'adminUser' });

        models.address.hasOne(models.company, { foreignKey: 'address', as: 'company_user_address1' });

        models.address.hasOne(models.company, { foreignKey: 'billingAddress', as: 'company_user_address2' });

        models.address.hasOne(models.company, { foreignKey: 'mailingAddress', as: 'company_user_address3' });

        models.user.hasMany(models.company, { foreignKey: 'userID', as: 'user_id' });

        models.process_table.belongsTo(models.company, { foreignKey: 'companyID' });

        models.process_table.hasOne(models.task, { foreignKey: 'relatedProcess' });

        models.form.hasOne(models.task, { foreignKey: 'formID' });

        models.identityRelationship.hasMany(models.company, { foreignKey: "ididentityRelationship", as: "company_identityRelationship" });
    };

    company.getCompanies = function (db) {
        return new Promise(function (resolve, reject) {
            var companyInformation = [];
            company.findAll({}).then(function (data) {
                getAddress(data, function (response) {
                    resolve(response);
                });
            }).catch(function (err) {
                reject(err);
            });
            var getAddress = function getAddress(data, callback) {
                var companyData = data.splice(0, 1)[0];
                db.address.findAll({ where: { $or: [{ idaddress: companyData.address }, { idaddress: companyData.billingAddress }, { idaddress: companyData.mailingAddress }] } }).then(function (addressData) {
                    companyData.dataValues['address'] = _lodash2.default.filter(addressData, function (filtered_data) {
                        return filtered_data.type == "address";
                    })[0];
                    companyData.dataValues['billingAddress'] = _lodash2.default.filter(addressData, function (filtered_data) {
                        return filtered_data.type == "billingAddress";
                    })[0];
                    companyData.dataValues['mailingAddress'] = _lodash2.default.filter(addressData, function (filtered_data) {
                        return filtered_data.type == "mailingAddress";
                    })[0];
                    companyInformation.push(companyData);
                    if (data.length) {
                        getAddress(data, callback);
                    } else {
                        callback(companyInformation);
                    }
                });
            };
        });
    };

    return company;
};

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=company.js.map