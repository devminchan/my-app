const app = require("express")();

app.get("/", (req, res) => {
  res.json({
    message: "Success",
  });
});

app.get("/hello", (req, res) => {
  res.json({
    message: "hello",
  });
});

app.get("/test", (req, res) => {
  res.json({
    message: "Test",
    env: process.env.TEST_ENV || "NULL",
  });
});

app.listen(3000, () => {
  console.log("Server starting on port 80");
});
