const express = require("express");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON bodies
app.use(express.json());

app.get("/healt", function (req, res) {
  res.send("Hola mundo!!!");
});

// Serve Swagger UI at /api-docs
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1/docs.json", (req, res) => {
  res.setHeader("Content-type", "application/json");
  res.send(swaggerSpec);
});

const userRoutes = require("./routes/userRoutes");

// Mount the user routes onto the /api prefix
app.use("/api/v1/", userRoutes);

// Tengo que exportar app para poder usar los tests.
module.exports = app;

app.listen(PORT, function () {
  console.log("Iniciando app en puerto " + PORT);
});
