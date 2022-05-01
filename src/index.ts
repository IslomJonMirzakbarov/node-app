import { Application, Request, Response } from "express";
const express = require("express");
const app: Application = express();
const { log1, log2 } = require("../middleware/logger");
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("config");
const home = require('./routes/home')
const courses = require("./routes/router");

// Configuration
console.log("App: " + config.get("name"));
console.log("Host: " + config.get("mail.host"));
console.log("Password: " + config.get("mail.password"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());

const debug = require("debug")("app:startup");
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  debug("Morgan enabled...");
}

app.use(log1);

app.use(log2);

// templating engines
app.set("view engine", "pug");
app.set("views", "./views");

const port = process.env.PORT || 3000;

app.use('/', home);

app.use("/api/courses", courses);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
