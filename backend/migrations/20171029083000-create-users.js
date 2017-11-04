'use strict';
const table = 'users';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable(table, {
            id: { type: Sequelize.STRING, primaryKey: true, unique: true },
            email: { type: Sequelize.STRING, unique: true, allowNull: false },
            password: { type: Sequelize.STRING, allowNull: false },
            type: { 
                type: Sequelize.ENUM, 
                values: ['admin', 'coach', 'client'],
                defaultValue: 'client'
            },
            name: { type: Sequelize.STRING },
            createdAt: { type: Sequelize.DATE, defaultValue: new Date() },
            updatedAt: { type: Sequelize.DATE, defaultValue: new Date() }
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable(table);
    }
};
