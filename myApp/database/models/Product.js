module.exports = (sequelize, dataTypes) => {

    let alias = 'Product'

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


    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.User, {
            foreignKey: 'users_id',
            as : 'user'
        }),
        Product.hasMany(models.Comment, {
            as: 'comment',
            foreignKey : 'products_id',
    
        } )
    };




    return Product;

}