'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const msgs = [
      {
        message: 'wb',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    await queryInterface.bulkInsert('msgs', msgs)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('msgs')
  }
}
