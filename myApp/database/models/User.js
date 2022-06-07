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
        User.hasMany(models.Products, {
            as: 'product',
            foreignKey: 'users_id'
        }),
            User.belongsToMany(models.Follower, {
                as: 'followers',
                through: '',
                foreignKey: 'users_id',
                otherKey: 'follower_id',
                timestamps: false
            })
    };


    return User;

}