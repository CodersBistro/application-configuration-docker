var express = require("express");
var config = require("./config");
var app = express();

app.get("/", (req, res) => {
  console.log(`Handling the request.`);
  console.log(
    `Connecting to the database ${config.db.host} with the credentials: ${
      config.db.username
    }:${config.db.password}`
  );
  res.send(`OK`);
});

app.listen(config.app.port);
console.log(`Listening on ports ${config.app.port}`);
