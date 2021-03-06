const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/dummy-records', (req, res) => {
  request(
    { url: 'https://rosterbuster.aero/wp-content/uploads/dummy-response.json' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = 3040;
app.listen(PORT, () => console.log(`listening on ${PORT}`));