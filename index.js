const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('<h1><center>Hello World app2<center></h1>');
});

app.listen(3001, () => {
  console.log('App listening on port 3002!');
});
