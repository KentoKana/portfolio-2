import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image';
import ImagePlaceholder from '../UI/ImagePlaceholder';
import { getDateFromFileName } from '../Helpers/functions';

function AllBlog() {
    let [blogPosts, handleBlogPosts] = useState(false);
    let [pageCount, getPageCount] = useState(false);
    let [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch(`http://portfolio-new.kentokanazawa.com/blog.json?p=${currentPage}`)
            .then(response =>
                response.json()
            )
            .then((data) => {
                getPageCount(data.pageCount);
                handleBlogPosts(() => {
                    return data.blog;
                });
                return data.blog;
            })

    }, [currentPage])

    const Pagination = () => {
        let prevBtnDisableStatus = currentPage === 1 ? true : false;
        let nextBtnDisableStatus = currentPage === pageCount ? true : false;

        const handlePrevClick = () => {
            setCurrentPage(currentPage - 1);
        }
        const handleNextClick = () => {
            setCurrentPage(currentPage + 1);
        }

        let pagesArr = [];
        for (let i = 1; i <= pageCount; i++) {
            pagesArr.push(i);
        }
        return (
            <>
                <button disabled={prevBtnDisableStatus} onClick={handlePrevClick}>Prev</button>
                {pagesArr.map((pl, key) => {
                    if (currentPage === key + 1) {
                        return (
                            <button disabled={true} key={key} onClick={() => setCurrentPage(pl)}>
                                {pl}
                            </button>
                        )
                    } else {
                        return (
                            <button disabled={false} key={key} onClick={() => setCurrentPage(pl)}>
                                {pl}
                            </button>
                        )
                    }
                })}
                <button onClick={handleNextClick} disabled={nextBtnDisableStatus}>Next</button>
            </>
        );
    }

    return (
        <main className="blogPosts">
            <h3 className="blogPosts__heading"><span>Recent Blog Posts</span></h3>
            <div className="container">
                {Object.keys(blogPosts).map((p, key) => {
                    return (
                        <div className="blogPosts__content" key={key}>
                            <ProgressiveImage src={`images/blog/${blogPosts[p].featureImage}`} placeholder=" ">
                                {(src, loading) => {
                                    return loading ? <ImagePlaceholder height={250} width={250} /> :
                                        <Link className="blog__title" to={`/single-blog?id=${blogPosts[p].id}`}>
                                            <img src={src} alt={blogPosts[p].postName} />
                                        </Link>

                                }}
                            </ProgressiveImage>
                            <div className="text">
                                <h4>
                                    <Link className="blog__title" to={`/single-blog?id=${blogPosts[p].id}`}>
                                        {blogPosts[p].postName}
                                    </Link>
                                </h4>
                                <em>{getDateFromFileName(blogPosts[p].fileName)}</em>
                                <p>
                                    {`${blogPosts[p].content.substring(0, 100)}...`}
                                </p>
                                <Link to={`/single-blog?id=${blogPosts[p].id}`}>Read More...</Link>
                            </div>
                        </div>
                    )
                })}
                <div className="blogPosts__pagination">
                    <Pagination />
                </div>
            </div>
        </main>
    );

}

export default AllBlog;
