"use strict";
const bcrypt = require("bcrypt")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Trial0",
        email: "Trial0@gmail.com",
        password: await bcrypt.hash("Trial@0", 10),
        role: "2",
        status: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Trial1",
        email: "Trial1@gmail.com",
        password: await bcrypt.hash("Trial@1", 10),
        role: "1",
        status: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Trial2",
        email: "Trial2@gmail.com",
        password: await bcrypt.hash("Trial@2", 10),
        role: "0",
        status: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Trial3",
        email: "Trial3@gmail.com",
        password: await bcrypt.hash("Trial@3", 10),
        role: "0",
        status: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Trial4",
        email: "Trial4@gmail.com",
        password: await bcrypt.hash("Trial@4", 10),
        role: "0",
        status: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users");
  },
};
