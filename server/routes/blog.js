const express = require("express");
const router = express.Router();
const blogBuilder = require('../Blog');

let blog = blogBuilder.buildBlog;
let posts = blog.buildBlogJSON();
console.log('hello');
router.get('/', (req, res) => {
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

router.post('/', (req, res) => {
    let blogPostID = req.body;
    let post = blog.getPostByID(posts, blogPostID.postID);
    res.json({
        blog: post
    })
})

module.exports = router;