module.exports = (sequelize, dataTypes) => {

let alias = 'Follower'

let cols = {
    id:   {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER,
    
    },

    id_usuario_seguidor : {
        type: dataTypes.INTEGER
    },

    id_usuario_seguido : {
        type: dataTypes.INTEGER
    }
}

let config = {
    timestamps: true,
}

const Follower = sequelize.define(alias, cols, config)

Follower.associate = function (models) {
    Follower.belongsToMany(models.Users, {
        as: 'followers',
        through : 'hay que crearla ',
        foreignKey: 'follower_id',
        otherKey: 'users_id',
        timestamps: false
    })
}






return Follower







}