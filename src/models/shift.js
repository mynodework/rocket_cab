export default function(sequelize, DataTypes) {
    const shift = sequelize.define("shift", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        driver_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cab_model_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        shift_satrt_time: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        shift_end_time: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        login_time: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        logout_time: {
            type: DataTypes.STRING(100),
            allowNull: false,
            defaultValue: "0000-00-00 00:00:00"
        },
        cond: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        indexes: [],
        freezeTableName: true,
        timestamps: false,
        hooks: {}
    })

    return shift;
}