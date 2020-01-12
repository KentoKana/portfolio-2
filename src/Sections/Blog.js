import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";
import ImagePlaceholder from "../UI/ImagePlaceholder";
import { getDateFromFileName } from "../Helpers/functions";

function Blog() {
  let [blogPosts, handleBlogPosts] = useState(false);

  useEffect(() => {
    fetch("https://portfolio-new.kentokanazawa.com/blog.json?p=1")
      .then(response => response.json())
      .then(data => {
        handleBlogPosts(() => {
          return data.blog.slice(0, 3);
        });
        return data.blog;
      });
  }, []);

  return (
    <section id="blog" className="blog">
      <h3 className="blog__heading">
        <span>Recent Blog Posts</span>
      </h3>
      <div className="container">
        {Object.keys(blogPosts).map((p, key) => {
          return (
            <div key={key}>
              <ProgressiveImage
                src={`images/blog/${blogPosts[p].featureImage}`}
                placeholder=" "
              >
                {(src, loading) => {
                  return loading ? (
                    <ImagePlaceholder height={250} width={250} />
                  ) : (
                    <Link
                      className="blog__title"
                      to={`/single-blog?id=${blogPosts[p].id}`}
                    >
                      <img src={src} alt={blogPosts[p].postName} />
                    </Link>
                  );
                }}
              </ProgressiveImage>
              <div className="text">
                <h4>
                  <Link
                    className="blog__title"
                    to={`/single-blog?id=${blogPosts[p].id}`}
                  >
                    {blogPosts[p].postName}
                  </Link>
                </h4>
                <span>{getDateFromFileName(blogPosts[p].fileName)}</span>
                <p>{`${blogPosts[p].textSnippet.substring(0, 120)}...`}</p>
                <Link to={`/single-blog?id=${blogPosts[p].id}`}>
                  Read More...
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container">
        <div className="blog__view-all-link">
          <Link to={"/blog-posts?p=1"}>View All Posts</Link>
        </div>
      </div>
    </section>
  );
}

export default Blog;
