import Sequelize from "sequelize";
// import migrations from './migrations'
import models from "./models";

const db = {};

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER,
process.env.DB_PASSWORD, { port: 3306, host: process.env.HOST, dialect:
'mysql',logging:false });


// load models
Object
    .keys(models)
    .forEach((modelName) => {
        const model = models[modelName](sequelize, Sequelize.DataTypes, Sequelize);
        db[modelName] = model;
    }, (err) => {
        console.log(err)
    });

// invoke associations on each of the models
Object
    .keys(db)
    .forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    }, (err) => {
        console.log(err)
    });

sequelize
    .sync()
    .then(() => {})

export default Object.assign({}, db, {sequelize, Sequelize});