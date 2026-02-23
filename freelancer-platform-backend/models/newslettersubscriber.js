/**
 * @swagger
 * components:
 *   schemas:
 *     NewsletterSubscriber:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         email:
 *           type: string
 *       example: 
 *         email: john@example.com
 */
/**
 * @swagger
 * /newsletter/subscribe:
 *   post:
 *     summary: Subscribe to newsletter
 *     tags: [Newsletter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewsletterSubscriber'
 *     responses:
 *       201:
 *         description: Successfully subscribed
 *       400:
 *         description: Email is missing or invalid
 *       409:
 *         description: Email already subscribed
 *       500:
 *         description: Server error
 */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsletterSubscriber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NewsletterSubscriber.init({
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NewsletterSubscriber',
  });
  return NewsletterSubscriber;
};