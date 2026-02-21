/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstname
 *         - lastname
 *         - email
 *         - password
 *         - role
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID of the user
 *         firstname:
 *           type: string
 *           description: First name of the user
 *         lastname:
 *           type: string
 *           description: Last name of the user
 *         email:
 *           type: string
 *           description: Email address of the user
 *         password:
 *           type: string
 *           description: Password for the user account (hashed)
 *         role:
 *           type: string
 *           description: Role of the user (e.g., "client", "freelancer")
 *       example:
 *         id: 1
 *         firstname: "John"
 *         lastname: "Doe"
 *         email: "john.doe@example.com"
 *         password: "$2b$10$..."
 *         role: "freelancer"
 */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Profile, { foreignKey: 'userId' });
      User.hasMany(models.Job, { foreignKey: 'userId' });
    }
  }
  User.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};