module.exports = (sequelize, dataTypes) => {

    let alias = 'Products'

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        description: {
            type: dataTypes.STRING,
        },
        photo: {
            type: dataTypes.STRING,
        },
        model: {
            type: dataTypes.STRING

        },
        users_id: {
            type: dataTypes.INTEGER,

        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
        }

    }

    let config = {
        tableName: 'Products',
        timestamps: true,
        underscored: true,

    }

    const Product = sequelize.define(alias, cols, config);

    return Product;

}