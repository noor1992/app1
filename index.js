const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('<h1><center>App 1<center></h1>');
});

app.listen(3003, () => {
  console.log('App listening on port 3003!');
});
