import React from 'react';
import { Link } from 'react-router-dom';
function SingleBlog(props) {

    const urlParams = new URLSearchParams(window.location.search);
    const postID = urlParams.get('id');
    let postObj;
    // Check if props.blogObj retrieved an object from the api (i.e. the prop has been set).
    if (Object.entries(props.blogObj).length !== 0) {
        postObj = props.blogObj.filter((obj) => { return obj.id === parseInt(postID); })
        postObj = postObj[0];
        localStorage.setItem('postObj', JSON.stringify(postObj));
    } else {
        postObj = JSON.parse(localStorage.getItem("postObj"));
    }

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
}

export default SingleBlog;
