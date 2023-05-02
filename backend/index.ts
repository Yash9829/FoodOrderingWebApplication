import express, { Express, Request, Response } from "express";

const app: Express = express();
// const { Sequelize } = require("sequelize");

const port = 5000;

// const mongoDB = require("./db.js");
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// mongoDB().then(() => {
//   app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
//   });
// });
