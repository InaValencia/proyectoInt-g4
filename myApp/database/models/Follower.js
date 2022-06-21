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
        tableName: 'followers',
        timestamps: false,
        underscored: true,
    }

    const Follower = sequelize.define(alias, cols, config);

    return Follower;

}