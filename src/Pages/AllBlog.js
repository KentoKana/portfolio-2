import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";
import ImagePlaceholder from "../UI/ImagePlaceholder";
import Pagination from "../UI/Pagination";
import { getDateFromFileName } from "../Helpers/functions";

const AllBlog = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const pageNum = parseInt(urlParams.get("p"));

  let [blogPosts, handleBlogPosts] = useState(false);
  let [pageCount, getPageCount] = useState(false);
  let [currentPage, setCurrentPage] = useState(pageNum);
  useEffect(() => {
    fetch(`http://portfolio-new.kentokanazawa.com/blog.json?p=${currentPage}`)
      .then(response => response.json())
      .then(data => {
        getPageCount(data.pageCount);
        handleBlogPosts(() => {
          return data.blog;
        });
        return data.blog;
      });
  }, [currentPage]);

  const storePrevPage = pageCount => {
    localStorage.setItem("prevPage", pageCount);
  };

  return (
    <main className="blogPosts">
      <h1 className="blogPosts__heading">
        <span>Recent Blog Posts</span>
      </h1>
      <div className="container">
        {Object.keys(blogPosts).map((p, key) => {
          return (
            <div className="blogPosts__content" key={key}>
              <ProgressiveImage
                src={`images/blog/${blogPosts[p].featureImage}`}
                placeholder=" "
              >
                {(src, loading) => {
                  return loading ? (
                    <ImagePlaceholder height={250} width={250} />
                  ) : (
                    <div>
                      <Link
                        className="blog__title"
                        onClick={storePrevPage(pageNum)}
                        to={`/single-blog?id=${blogPosts[p].id}`}
                      >
                        <img src={src} alt={blogPosts[p].postName} />
                      </Link>
                    </div>
                  );
                }}
              </ProgressiveImage>
              <div className="text">
                <h2>
                  <Link
                    className="blog__title"
                    to={`/single-blog?id=${blogPosts[p].id}`}
                    onClick={storePrevPage(pageNum)}
                  >
                    {blogPosts[p].postName}
                  </Link>
                </h2>
                <div>{getDateFromFileName(blogPosts[p].fileName)}</div>
                <p>{`${blogPosts[p].textSnippet.substring(0, 150)}...`}</p>
                <div className="read-more-link-container">
                  <Link
                    to={`/single-blog?id=${blogPosts[p].id}`}
                    onClick={storePrevPage(pageNum)}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          pageCount={pageCount}
        />
      </div>
    </main>
  );
};

export default AllBlog;
