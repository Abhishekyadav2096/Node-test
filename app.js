const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("ABHISHEK YADAV COMPLETED CI/CD PIPELINE SUCCESSFULLY");
});

app.listen(4000, () => {
  console.log(`Server Started at ${4000}`);
});
