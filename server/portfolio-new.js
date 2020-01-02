"use strict";
// ---- Import Modules ---- //
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// ---- Import Routes ---- //
const blogRoute = require('./routes/blog');
const singlePostRoute = require('./routes/singlePost');

// ----Paths---- //
const paths = {
  reactBuild: path.join(__dirname, '../build')
}

// Use Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ---- Serve React Production Build Static Files ---- //
app.use(express.static(paths.reactBuild));

// ---- Set Routes ---- //
app.use("/blog.json", blogRoute);
app.use("/single-post.json", singlePostRoute);

// ---- Serve index.html on any url (for SPA) ---- //
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// ---- Serve On Port ---- //
const port = 9791;
app.listen(process.env.PORT || port);
console.log(`Listening on port ${port}`);