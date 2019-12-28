"use strict";
// ---- Import Modules ---- //
const express = require('express');
const path = require('path');
const blogBuilder = require('./Blog');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// ----Paths---- //
const paths = {
  reactBuild: path.join(__dirname, '../build')
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ---- Serve React Production Build Static Files ---- //
app.use(express.static(paths.reactBuild));

// ---- Set Routes ---- //
// Home Page
let blog = blogBuilder.buildBlog;
let posts = blog.buildBlogJSON();

app.get('/blog.json', (req, res) => {
  const pageCount = Math.ceil(posts.length / 4);
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
    blog: posts.slice(page * 4 - 4, page * 4)
  });
});

app.post('/single-post.json', (req, res) => {
  let blogPostID = req.body;
  let post = blog.getPostByID(posts, blogPostID.postID);
  res.json({
    blog: post
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(process.env.PORT || 9791);
console.log('Listening on port 9791');