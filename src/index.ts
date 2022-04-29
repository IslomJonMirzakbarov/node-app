import express, { Request, Response, Application } from "express";

const app: Application = express();

const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('kldsafdskl');
});

app.listen(port, () => {
  console.log(`app is runnung on https://localhost:${port}`);
})
