const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.post("/notes", (req, res) => {
  const newNote = req.body;

  notes.push(newNote);

  res.json(newNote);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
