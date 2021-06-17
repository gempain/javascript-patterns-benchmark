const express = require('express');

const app = express();

app.get('/1', (req, res) => {
  const json = {};

  if (req.query.hey) {
    json.hey = true;
  }

  if (req.query.ho) {
    json.ho = true;
  }

  res.json(json);
});

app.get('/2', (req, res) => {
  res.json({
    ...(req.query.hey ? {hey: true} : {}),
    ...(req.query.ho ? {ho: true} : {}),
  });
});

const port = 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
