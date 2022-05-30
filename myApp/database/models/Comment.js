module.exports = (sequelize, dataTypes) => {

    let alias = 'Comment'

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        comentario : {
            type: dataTypes.STRING,
        },
        products_id: {
            type: dataTypes.INTEGER,
        },
        users_id: {
            type: dataTypes.INTEGER

        },

    }

    let config = {
        tableName: 'Comments',
        timestamps: true,
        underscored: true,

    }

    const Comment = sequelize.define(alias, cols, config);

    return Comment;

}