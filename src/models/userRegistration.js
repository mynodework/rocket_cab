export default function(sequelize, DataTypes) {
    const userRegistration = sequelize.define("user_registration", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING(255),
            allowNull: false,
            primaryKey: true
        },
        token: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        OTPS: {
            type: DataTypes.INTEGER(5),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        mail_verification: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        mail_statsus: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_pic: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        indexes: [],
        freezeTableName: true,
        timestamps: false,
        hooks: {}
    })

    return userRegistration;
}