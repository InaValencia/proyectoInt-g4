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

        }

    }

    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt'
    }


    const Products = sequelize.define(alias, cols, config);

    return Products;

}