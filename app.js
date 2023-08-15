const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("ABHISHEK YADAV");
});

app.listen(4000, () => {
  console.log(`Server Started at ${4000}`);
});
