import { Application, Request, Response } from "express";
const express = require("express");

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("kldsafjdklf");
});

app.get("/api/courses", (req: Request, res: Response) => {
  res.send([1, 2, 3]);
});

// route parameters (getting single course value)
app.get("/api/courses/:id", (req: Request, res: Response) => {
  res.send(req.params);
});

app.get("/api/posts/:post", (req: Request, res: Response) => {
  res.send(req.query);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
