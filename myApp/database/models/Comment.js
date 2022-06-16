const { comments } = require("../../db/dataBase");

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
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt'
    }

    const Comment = sequelize.define(alias, cols, config);

     Comment.associate = function (models) {
        Comment.belongsTo(models.Product, {
            as: 'product',
            foreignKey : 'products_id'
        })
        Comment.belongsTo(models.User, {
            as : 'user',
            foreignKey : 'users_id'
        })
    }

    return Comment;

}