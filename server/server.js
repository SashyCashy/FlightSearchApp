const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const fs = require('fs');

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'build')));
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname + '/build/index.html'));
  });
}

app.get('/api/customers', async (req, res) => {
  const dataPath = './server/json/customer.json';
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});

app.get('/api/customer/:id', async (req, res) => {
  const dataPath = './server/json/customer.json';
  console.log(id);
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});
app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});
