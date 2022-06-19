module.exports = (sequelize, dataTypes) => {

    let alias = 'Follower'

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_usuario_seguidor: {
            type: dataTypes.INTEGER
        },
        id_usuario_seguido: {
            type : dataTypes.INTEGER
        }

    }

    let config = {
        tableName: 'users',
        timestamps: false,
        underscored: true,

    }

    const Follower = sequelize.define(alias, cols, config);

    Follower.associate = function (models) {
        Follower.belongsToMany(models.User, {
            as: 'users',
            through : 'follower',
            foreignKey: 'id_usuario_seguidor',
            otherKey: 'users_id',
            timestamps: false
        })
    };




    return Follower;

}