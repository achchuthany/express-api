'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({User,Comment}) {
            // define association here
            this.belongsTo(User, {foreignKey: 'userId', as: 'user'});
            this.hasMany(Comment, {foreignKey: 'postId', as: 'comments'})
        }

        // toJSON() {
        //     return {...this.get(), id: undefined, userId: undefined};
        // }
    };
    Post.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
            references: {
                model: "users",
                key: "id"
            },
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        tableName: 'posts',
        modelName: 'Post',
    });
    return Post;
};