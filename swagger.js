const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

// Define Swagger Options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Olga Node.js API",
      version: "1.0.0",
      description: "Sitio test swagger",
    },
  },
  apis: ["./routes/*.js"], // Path to JSDoc comments
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
