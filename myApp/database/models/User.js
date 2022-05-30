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

    }

    let config = {
        tableName: 'Users',
        timestamps: true,
        underscored: true,

    }

    const User = sequelize.define(alias, cols, config);

    return User;

}