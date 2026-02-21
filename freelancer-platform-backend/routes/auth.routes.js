const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: User login
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@email.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login successful, returns JWT token
 *       401:
 *         description: Wrong email or password
 *
 * /api/auth/register:
 *  post:
 *     summary: User registration
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstname
 *               - lastname
 *               - email
 *               - password
 *               - passwordConfirmation
 *               - role
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@email.com
 *               password:
 *                 type: string
 *                 example: 123456
 *               passwordConfirmation:
 *                type: string
 *                example: 123456
 *               firstname:
 *                type: string
 *                example: John
 *               lastname:
 *                type: string
 *                example: Doe
 *               role:
 *                type: string
 *                example: freelancer
 *     responses:
 *       200:
 *         description: Registration successful, returns JWT token
 *       401:
 *         description: Wrong email or password
 *      
 */
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
