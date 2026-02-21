/**
 * @swagger 
 * components:
 *   schemas:
 *     ContactMessage:
 *       type: object
 *       required:
 *         - email
 *         - message
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the contact message.
 *         email:
 *           type: string
 *           description: The email address of the sender.
 *         message:
 *           type: string
 *           description: The content of the contact message.
 *       example:
 *          id: 1
 *          email: "user@example.com"
 *          message: "I have a question about your services."
 * 
 */
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
