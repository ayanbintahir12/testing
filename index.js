const express = require('express');

let x=21;
const app = express();

app.get('/', (req, res) => {
  res.send('hello');
  process.exit();
});
app.listen(3000, () => {
  console.log('App listening at port 3000!');
});
