const express = require("express");
const router = express.Router();
const blogBuilder = require('../Blog');

const blog = blogBuilder.buildBlog;
const posts = blog.buildBlogJSON();
router.post('/', (req, res) => {
    let blogPostID = req.body;
    let post = blog.getPostByID(posts, blogPostID.postID);
    res.json({
        blog: post
    })
})

module.exports = router;