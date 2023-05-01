const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db.js");
app.get("/", (req, res) => {
  res.send("Hello world!");
});

mongoDB().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
