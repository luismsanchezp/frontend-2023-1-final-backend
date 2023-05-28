const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./src/routes/user.routes");
const authRoutes = require("./src/routes/auth.routes");
const profileRoutes = require("./src/routes/profile.routes");

const { API_VERSION } = require("./config");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, profileRoutes);

module.exports = app;
