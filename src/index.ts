import { Application, Request, Response } from "express";

const express = require("express");

const app: Application = express();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/api/courses", (req: Request, res: Response) => {
  res.send([1, 2, 3]);
});

app.get("/api/courses/:id", (req: Request, res: Response) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found.");
  res.send(course);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
