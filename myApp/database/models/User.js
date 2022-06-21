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
        foto: {
            type: dataTypes.STRING,
        }
    }

    let config = {
        tableName: 'users',
        timestamps: false,
        underscored: false,

    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
            User.hasMany(models.Product, {
                as: 'product',
                foreignKey: 'users_id'
            })
            User.belongsToMany(models.Follower, {
                as: 'seguidores',
                through : 'followers',
                foreignKey: 'id_usuario_seguidor',
                otherKey: 'id_usuario_seguido',
                timestamps: false
            }) 
    };


    return User;

}