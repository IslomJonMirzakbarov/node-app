import { Application, Request, Response } from "express";
const express = require("express");

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("kldsafjdklf");
});

app.get('/api/courses', (req: Request, res: Response) => {
  res.send([1, 2, 3]);
})

app.listen(3001, () => {
  console.log("Listening on port 3001...");
});
