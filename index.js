const express = require("express");

const app = express();

const notes = [];

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
