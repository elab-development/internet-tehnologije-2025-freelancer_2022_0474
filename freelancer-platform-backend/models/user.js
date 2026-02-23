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
 *        firstname:
 *         type: string
 *        lastname:
 *         type: string
 *        email:
 *         type: string
 *        password:
 *         type: string
 *        role:
 *         type: string
 *       example: 
 *         firstname: John
 *         lastname: Doe
 *         email: john@example.com
 *         password: password123
 *         role: freelancer
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