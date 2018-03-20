export default function(sequelize, DataTypes) {
    const carModal = sequelize.define("car_modal", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        model_name: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        enbale_img: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        disable_img: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        indexes: [],
        freezeTableName: true,
        timestamps: false,
        hooks: {}
    })

    return carModal;
}