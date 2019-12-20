const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static(path.join(__dirname, 'public/images')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.get('/images', function(req, res){
//   res.sendFile(path.join(__dirname, 'public/images'));
// })

app.listen(process.env.PORT || 9791);