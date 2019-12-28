import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Blog() {

    let [blogPosts, handleBlogPosts] = useState(false);

    useEffect(() => {
        fetch('http://portfolio-new.kentokanazawa.com/blog.json?p=1')
            .then(response =>
                response.json()
            )
            .then((data) => {
                handleBlogPosts(data.blog);
                return data.blog;
            })

    }, [])

    return (
        <section id="blog" className="blog">
            <h3 className="blog__heading"><span>Recent Blog</span></h3>
            <div className="container">
                {Object.keys(blogPosts).map((p, key) => {
                    return (
                        <div key={key}>
                            <h4>{blogPosts[p].postName}</h4>
                            <p>
                                {`${blogPosts[p].content.substring(0, 100)}...`}
                            </p>
                            <div>
                                <Link to={`/single-blog?id=${blogPosts[p].id}`}>Read More...</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Blog;
