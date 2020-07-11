const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//Static file declaration
app.use(express.static(path.join(__dirname, '..', 'build')));
app.get('*', (req, res) => {
  res.sendfile(path.join((__dirname = '/build/index.html')));
});

app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});
