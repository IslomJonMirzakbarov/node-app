import { Application, Request, Response } from "express";

const express = require("express");

const app: Application = express();

app.get("/courses/:id", (req: Request, res: Response) => {
  res.send(req.params);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
