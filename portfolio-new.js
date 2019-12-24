"use strict";
// ---- Import Modules ---- //
const express = require('express');
const path = require('path');
const blogBuilder = require('./server/Blog');
const app = express();
var cors = require('cors');

// ----Paths---- //
const paths = {
  reactBuild: path.join(__dirname, 'build')
}

app.use(cors());

// ---- Serve React Production Build Static Files ---- //
app.use(express.static(paths.reactBuild));

// ---- Set Routes ---- //
// Home Page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Blog Endpoint
let blog = blogBuilder.buildBlog;
let posts = blog.buildBlogJSON();

app.get('/blog.json', function (req, res) {
  res.json({blog: posts});
});


app.listen(process.env.PORT || 9791);
console.log('Listening on port 9791');