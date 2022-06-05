const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('<h1><center>Nodejs app workig !<center></h1>');
});



app.listen(3008, () => {
  console.log('App listening on port 3008!');


});
