export default function(sequelize, DataTypes) {
    const cab = sequelize.define("cab", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        license_plate: {
            type: DataTypes.STRING(32),
            allowNull: false
        },
        car_model_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        manufacture_year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        driver_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        active: {
            type: DataTypes.TINYINT(1),
            allowNull: false
        }
    }, {
        indexes: [],
        freezeTableName: true,
        timestamps: false,
        hooks: {}
    })

    return cab;
}