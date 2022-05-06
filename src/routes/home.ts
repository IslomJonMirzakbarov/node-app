import { Request, Response } from "express";
const express = require("express");
const router = express();

router.get("/", (req: Request, res: Response) => {
  res.send('home directory welcome');
});

module.exports = router; 
