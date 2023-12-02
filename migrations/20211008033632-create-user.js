'use strict';
module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING
            },
            role: {
                allowNull: false,
                type: DataTypes.STRING
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
        await queryInterface.dropTable('users');
    }
};