import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function SingleBlog() {

    let [blogPost, handleBlogPost] = useState(false);
    let [postID, setPostID] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setPostID(urlParams.get('id'));
        fetch('http://localhost:9791/single-post.json/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ postID: postID }),
        })

        fetch('http://localhost:9791/single-post.json/')
            .then(response =>
                response.json()
            )
            .then((data) => {
                try {
                    handleBlogPost(data.blog);
                } catch (err) {
                    console.log(err);
                }
                console.log(data);
                return data.blog;
            })
    }, [postID])

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
