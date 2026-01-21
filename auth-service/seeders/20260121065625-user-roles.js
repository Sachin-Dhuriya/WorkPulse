"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("userRoles", [
      {
        roleId: 0,
        roleName: "EMPLOYEE",
      },
      {
        roleId: 1,
        roleName: "MANAGER",
      },
      {
        roleId: 2,
        roleName: "ADMIN",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("userRoles");
  },
};
