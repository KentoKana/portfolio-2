import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../Helpers/CodeBlock";
import { getDateFromFileName } from "../Helpers/functions";

function SingleBlog() {
  let [blogPost, handleBlogPost] = useState(false);

  let prevPageNum;
  if (localStorage.getItem("prevPage")) {
    prevPageNum = localStorage.getItem("prevPage");
  }

  // If the prevPage localStorage item is not set (i.e. is NaN), set set Item.
  if (isNaN(localStorage.getItem("prevPage"))) {
    localStorage.setItem("prevPage", 1);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const postID = parseInt(urlParams.get("id"));
    fetch("http://portfolio-new.kentokanazawa.com/single-post.json/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ postID: postID })
    })
      .then(response => response.json())
      .then(data => {
        handleBlogPost(data.blog);
        return data.blog;
      });

    handleBlogPost({});
  }, []);

  if (blogPost) {
    return (
      <section className="single-blog">
        <div className="container">
          <div className="single-blog__container">
            <div
              className="single-blog__feature-image"
              style={{
                backgroundImage: `url('images/blog/${blogPost.featureImage}')`
              }}
            >
              <h1>{blogPost.postName}</h1>
              <h2>{getDateFromFileName(blogPost.fileName)}</h2>
              <h2>Written By {blogPost.author}</h2>
            </div>
            <div className="text-area">
              <ReactMarkdown
                source={blogPost.content}
                renderers={{
                  code: CodeBlock,
                  link: props => {
                    // Logic to open external links with a new tab.
                    if (window.location.href.includes(props.href)) {
                      return <a className="internalLink" href={props.href}>{props.children}</a>;
                    } else {
                      return (
                        <a
                          className="externalLink"
                          href={props.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {props.children}
                        </a>
                      );
                    }
                  }
                }}
                escapeHtml={false}
              />
              <Link
                className="back-to-home-link"
                to={`/blog-posts?p=${prevPageNum}`}
              >
                <i className="fas fa-arrow-left"></i> Back To Blog List
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <div>Loading Post...</div>;
  }
}

export default SingleBlog;
