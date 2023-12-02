'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post,User}) {
        this.belongsTo(Post, {foreignKey: 'postId', as: 'post'});
        this.belongsTo(User, {foreignKey: 'userId', as: 'user'});
    }
  };
  Comment.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    postId: {
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
      references: {
        model: "posts",
        key: "id"
      },
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
    body:{
      type: DataTypes.TEXT,
      allowNull:false
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
    modelName: 'Comment',
    tableName: 'comments'
  });
  return Comment;
};