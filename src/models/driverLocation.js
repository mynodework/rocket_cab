export default function(sequelize, DataTypes) {
    const driverLocation = sequelize.define("driver_location", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        pincode: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        latitude: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        longitiude: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        car_model_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        driver_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        isVisible: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        token: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        indexes: [],
        freezeTableName: true,
        timestamps: false,
        hooks: {}
    })

    return driverLocation;
}