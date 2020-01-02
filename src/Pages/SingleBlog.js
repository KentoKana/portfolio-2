import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function SingleBlog() {

    let [blogPost, handleBlogPost] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const postID = parseInt(urlParams.get('id'));
        fetch('http://portfolio-new.kentokanazawa.com/single-post.json/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postID: postID }),
        }).then(response =>
            response.json()
        ).then((data) => {
            handleBlogPost(data.blog);
            return data.blog;
        });

        handleBlogPost({});
    }, []);

    if (blogPost) {
        let postObj = blogPost;
        return (
            <section className="single-blog">
                <div className="container">
                    <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <Link to="/">Back To Home</Link>
                        <h2>{postObj.postName}</h2>
                        <div>
                            <p><em>Written By {postObj.author}</em></p>
                        </div>
                        <p>
                            {postObj.content}
                        </p>
                    </div>

                </div>
            </section>
        );
    } else {
        return (
            <div>
                Loading Post...
            </div>
        )
    }
}

export default SingleBlog;
