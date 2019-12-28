"use strict";
// ---- Import Modules ---- //
const express = require('express');
const path = require('path');
const blogBuilder = require('./server/Blog');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ----Paths---- //
const paths = {
  reactBuild: path.join(__dirname, 'build')
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

app.get('/blog.json', (req, res, next) => {
  // Blog Endpoint
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

let blogPostID;
app.post('/single-post.json', (req, res, next) => {
  blogPostID = req.body;
})

app.get('/single-post.json', (req, res, next) => {
  let post = blog.getPostByID(posts, blogPostID.postID);
  res.json({
    blog: post
  });
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 9791);
console.log('Listening on port 9791');