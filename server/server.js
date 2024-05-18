const express = require("express");
const dbconfig = require("./config/dbconfig")

const app = express();




dbconfig()


const test = {
  name: "luqman",
  email: "test@gmail.com",
};

app.get("/test", (req, res) => {
  res.json(test);
});

app.listen(3000);
