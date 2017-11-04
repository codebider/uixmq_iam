'use strict';

const table = 'event_blocks';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable(table, {
            id: { type: Sequelize.STRING, allowNull: false, unique: true, primaryKey: true },
            eventId: { 
                type: Sequelize.STRING,
                references: {
                    model: 'events',
                    key: 'id'
                }
            },
            timeBegin: { type: Sequelize.DATE, defaultValue: new Date() },
            timeEnd: { type: Sequelize.DATE, defaultValue: new Date() },
            createdAt: { type: Sequelize.DATE, defaultValue: new Date() },
            updatedAt: { type: Sequelize.DATE, defaultValue: new Date() }
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable(table);
    }
};
