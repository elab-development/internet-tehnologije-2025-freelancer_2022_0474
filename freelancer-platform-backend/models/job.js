/**
 * @swagger
 * components:
 *   schemas:
 *     Job:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - duration
 *         - budget
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         detailedDescription:
 *           type: string
 *         duration:
 *           type: string
 *         budget:
 *           type: integer
 *       example: 
 *         title: "Web Development Project"
 *         description: "Develop a responsive website for a client"
 *         detailedDescription: "The website should be responsive and accessible on all devices."
 *         duration: "3 months"
 *         budget: 5000
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