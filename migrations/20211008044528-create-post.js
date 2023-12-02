'use strict';
module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable('posts', {
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
        });
    },
    down: async (queryInterface, DataTypes) => {
        await queryInterface.dropTable('posts');
    }
};