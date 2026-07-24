// routes/userRoutes.js
const express = require("express");
const router = express.Router();

// Import the controller
const userController = require("../controllers/userController");

// Map HTTP methods and paths to controller functions
/**
 * @openapi
 * /api/v1/users:
 *    get:
 *     tags:
 *       - Users
 *     summary: Retrieve all users
 *     responses:
 *       "200": # status code
 *         description: A JSON array of user names
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       "400":
 *         description: Bad request. User ID must be an integer and larger than 0.
 *       "401":
 *         description: Authorization information is missing or invalid.
 *       "404":
 *         description: A user with the specified ID was not found.
 *       "5XX":
 *         description: Unexpected error.
 */
router.get("/users", userController.getAllUsers);
/**
 * @openapi
 * components:
 *   schemas:
 *     User:          # <--- Name it 'User', do NOT use 'User.ts'
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 */
/**
 * @openapi
 * /api/v1/users/:id:
 *   get:
 *     tags:
 *       - Users
 *     summary: Gets a user by ID.
 *     description: >
 *       A detailed description of the operation.
 *       Use markdown for rich text representation,
 *       such as **bold**, *italic*, and [links](https://swagger.io).
 *     operationId: getUserById
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User ID
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/User"
 */
router.get("/users/:id", userController.getUserById);
router.post("/users", userController.createUser);

module.exports = router;
