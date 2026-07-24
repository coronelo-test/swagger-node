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

const userRoutes = require("./routes/userRoutes");

// Serve Swagger UI at /api-docs
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1/docs.json", (req, res) => {
  res.setHeader("Content-type", "application/json");
  res.send(swaggerSpec);
});

// Mount the user routes onto the /api prefix
app.use("/api/v1/", userRoutes);

app.listen(PORT, function () {
  console.log("Iniciando app en puerto " + PORT);
});
