'use strict';
const uuidProvider = require("node-uuid");
const table = 'Banks';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert(table, [
            {   
                "id": uuidProvider.v4(),
                "shortName": "BIDV",
                "fullName": "Ngân hàng đầu tư và phát triển"
            },
            {   
                "id": uuidProvider.v4(),
                "shortName": "Vietcombank",
                "fullName": "Ngân hàng thương mại cổ phân Ngoại thương Việt Nam"
            },
            {   
                "id": uuidProvider.v4(),
                "shortName": "Vietinbank",
                "fullName": "Ngân hàng TMCP Công Thương Việt Nam"
            },
            {   
                "id": uuidProvider.v4(),
                "shortName": "Agribank",
                "fullName": "Ngân hàng đầu tư và phát triển"
            }
        ], {});
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete(table, null, {});
    }
};
