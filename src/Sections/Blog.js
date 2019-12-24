import React, { useEffect, useState } from 'react';
function Blog() {

    let [blogPosts, handleBlogPosts] = useState(false);
    
    useEffect(() => {
        fetch('http://portfolio-new.kentokanazawa.com/blog.json')
            .then(response =>
                response.json()
            )
            .then((data) => {
                handleBlogPosts(data.blog.posts);
                return data.blog.posts
            })

    }, [])

    const BlogSection = () => {
        return (
            Object.keys(blogPosts).map((p, key) => {
                return (
                    <div key={key} className="container">
                        <p>
                            {blogPosts[p].content}  
                        </p>
                    </div>
                )
            })
        )

    }

    return (
        <div className="blog">
            <BlogSection />
        </div>
    );
}

export default Blog;
