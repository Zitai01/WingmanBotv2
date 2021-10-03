'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Msg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Msg.init(
    {
      message: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Msg',
      tableName: 'msgs'
    }
  )
  return Msg
}
