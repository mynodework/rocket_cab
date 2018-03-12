export default function(sequelize, DataTypes) {
    const userLocation = sequelize.define("user_location", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        latitude: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        longitude: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        token: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        indexes: [],
        freezeTableName: true,
        timestamps: false,
        hooks: {}
    })

    return userLocation;
}