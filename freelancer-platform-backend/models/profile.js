/**
 * @swagger
 * components:
 *   schemas:
 *     Profile:
 *       type: object
 *       required:
 *         - bio
 *         - skills
 *         - location
 *         - userId
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the profile
 *         bio:
 *           type: string
 *           description: A short biography of the freelancer
 *         skills:
 *           type: string
 *           description: A comma-separated list of skills
 *         location:
 *           type: string
 *           description: The location of the freelancer
 *         userId:
 *           type: integer
 *           description: The ID of the associated user
 *       example:
 *         id: 1
 *         bio: "Experienced web developer with a passion for creating dynamic and responsive websites."
 *         skills: "JavaScript, Node.js, React, CSS"
 *         location: "New York, USA"
 *         userId: 1
 */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Profile.init({
    bio: DataTypes.TEXT,
    skills: DataTypes.STRING,
    location: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};