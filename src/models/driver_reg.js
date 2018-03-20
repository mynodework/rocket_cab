export default function(sequelize, DataTypes) {
    const driverReg = sequelize.define("driver_reg", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        f_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        l_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        mobile: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        profile_pic: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        city: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        dob: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        otp: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cre_time: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        driving_lincense_number: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        expiry_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        working: {
            type: DataTypes.TINYINT(1),
            allowNull: false
        },
        token: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        active: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        mobile_verfication: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        indexes: [],
        freezeTableName: true,
        timestamps: true,
        updatedAt: 'cre_time',
        createdAt: false
    })

    return driverReg;
}