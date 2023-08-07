const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("ABHISHEK YADAV DEV");
});

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
