/**
 * @swagger
 * components:
 *   schemas:
 *     Job:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - detailedDescription
 *         - duration
 *         - budget
 *         - userId
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the job.
 *         title:
 *           type: string
 *           description: The title of the job.
 *         description:
 *           type: string
 *           description: A short description of the job.
 *         detailedDescription:
 *           type: string
 *           description: A detailed description of the job.
 *         duration:
 *           type: string
 *           description: The expected duration of the job (e.g., "1 week", "2 months").
 *         budget:
 *           type: integer
 *           description: The budget for the job in USD.
 *         userId:
 *           type: integer
 *           description: The ID of the user who posted the job.
 *       example:
 *         id: 1
 *         title: "Build a React Application"
 *         description: "Looking for a developer to build a React application."
 *         detailedDescription: "I need a React developer to create a web application for my business. The application should have user authentication, a dashboard, and integration with a third-party API."
 *         duration: "2 months"
 *         budget: 5000
 *         userId: 1
 */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Job.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Job.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    detailedDescription: DataTypes.TEXT,
    duration: DataTypes.STRING,
    budget: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};