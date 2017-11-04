'use strict';

const table = 'events';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable(table, {
            id: { type: Sequelize.STRING, allowNull: false, unique: true, primaryKey: true },
            name: { type: Sequelize.STRING, allowNull: false},
            location: { type: Sequelize.STRING, allowNull: true, defaultValue: null},
            coachId: { 
                type: Sequelize.STRING,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            clientId: { 
                type: Sequelize.STRING,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            createdAt: { type: Sequelize.DATE, defaultValue: new Date() },
            updatedAt: { type: Sequelize.DATE, defaultValue: new Date() }
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable(table);
    }
};
