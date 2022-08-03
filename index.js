const express = require("express");
const app = express();
// const posts = require('./posts')

app.get("/secure-token", (req, res) => {
  res.send(false);
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running."));
