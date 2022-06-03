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
        tableName: 'Comments',
        timestamps: true,
        underscored: true,

    }

    const Comment = sequelize.define(alias, cols, config);

     Comment.associate = function (models) {
        Comment.belongsTo(models.Products, {
            as: 'product',
            foreignKey : 'product_id'
        })
    }

    return Comment;

}