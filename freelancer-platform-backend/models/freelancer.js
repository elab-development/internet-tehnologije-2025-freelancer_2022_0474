/**
 * @swagger
 * components:
 *   schemas:
 *     Freelancer:
 *       type: object
 *       required:
 *         - name
 *         - title
 *         - hourlyRate
 *         - location
 *         - skills
 *         - shortBio
 *         - image
 *         - userId
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the profile
 *         name:
 *           type: string
 *           description: The name of the freelancer
 *         title:
 *           type: string
 *           description: The title of the freelancer
 *         hourlyRate:
 *           type: string
 *           description: The hourly rate of the freelancer
 *         location:
 *           type: string
 *           description: The location of the freelancer
 *         skills:
 *           type: string
 *           description: A comma-separated list of skills
 *         shortBio:
 *           type: string
 *           description: A short biography of the freelancer
 *         image:
 *           type: string
 *           description: The image URL of the freelancer
 *         userId:
 *           type: integer
 *           description: The ID of the associated user
 *       example:
 *         id: 1
 *         name: "Experienced web developer with a passion for creating dynamic and responsive websites."
 *         title: "Senior Web Developer"
 *         hourlyRate: "50"
 *         location: "New York, USA"
 *         skills: "JavaScript, Node.js, React, CSS"
 *         shortBio: "I have over 10 years of experience in web development, specializing in front-end and back-end technologies. I am dedicated to delivering high-quality work and exceeding client expectations."  
 *         userId: 1
 */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Freelancer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Freelancer.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    hourlyRate: DataTypes.STRING,
    location: DataTypes.STRING,
    skills: {type: DataTypes.TEXT, defaultValue: ""},
    shortBio: DataTypes.TEXT,
    image: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Freelancer',
  });
  return Freelancer;
};