const { useColors } = require("debug/src/browser");
const Products = require("./Products");

module.exports = (sequelize, dataTypes) => {

    let alias = 'User'

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email: {
            type: dataTypes.STRING,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        apellido: {
            type: dataTypes.STRING
        },
        contrasena: {
            type: dataTypes.STRING,
        },
        foto : {
            type: dataTypes.STRING,
        }

    }

    let config = {
        tableName: 'Users',
        timestamps: true,
        underscored: true,

    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Products, {
            as: 'product',
            foreignKey : 'users_id'
        })
    }


    return User;

}