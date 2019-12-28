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
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/blog.json', (req, res) => {
  // Blog Endpoint
  let blog = blogBuilder.buildBlog;
  let posts = blog.buildBlogJSON();
  const pageCount = Math.ceil(posts.length / 3);
  let page = parseInt(req.query.p);
  if (!page) {
    page = 1;
  }
  if (page > pageCount) {
    page = pageCount;
  }
  res.json({
    page: page,
    pageCount: pageCount,
    blog: posts.slice(page * 3 - 3, page * 3)
  });

});

app.listen(process.env.PORT || 9791);
console.log('Listening on port 9791');