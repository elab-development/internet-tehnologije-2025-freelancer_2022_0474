'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ContactMessage extends Model {
    static associate(models) {
      
    }
  }
  ContactMessage.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ContactMessage',
    }
  );
  return ContactMessage;
};
