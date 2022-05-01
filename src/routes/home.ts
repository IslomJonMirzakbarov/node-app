import { Application, Request, Response } from "express";
const express = require("express");
const router = express();

router.get("/", (req: Request, res: Response) => {
  res.render("index", { title: "My express app", message: "hello" });
});

module.exports = router;
