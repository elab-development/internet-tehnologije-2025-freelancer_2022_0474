const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Freelancer Platform API",
    version: "1.0.0",
    description: "API documentation for the Freelancer Platform backend",
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Local server",
    },
  ],

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },


  security: [
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: [
    "./routes/*.js",
    "./models/*.js"
  ],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;