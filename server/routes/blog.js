const express = require("express");
const router = express.Router();
const blogBuilder = require('../Blog');
const blog = blogBuilder.buildBlog;
const posts = blog.buildBlogJSON();

router.get('/', (req, res) => {
    const postsPerPage = 3;
    const pageCount = Math.ceil(posts.length / postsPerPage);
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
        blog: posts.slice(page * postsPerPage - postsPerPage, page * postsPerPage)
    });
});

module.exports = router;