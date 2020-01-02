import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = (props) => {

    let prevBtnDisableStatus = props.currentPage === 1 ? true : false;
    let nextBtnDisableStatus = props.currentPage === props.pageCount ? true : false;

    const btnDisableStyle = (btnDisabled) => {
        if (btnDisabled) {
            return { pointerEvents: 'none', display: 'none' }
        } else {
            return { pointerEvents: 'auto' }
        }
    }

    let pagesArr = [];
    for (let i = 1; i <= props.pageCount; i++) {
        pagesArr.push(i);
    }

    return (
        <div className="pagination">
            <div>
                <Link
                    to={`${window.location.pathname}?p=${props.currentPage - 1}`}
                    onClick={() => props.setCurrentPage(props.currentPage - 1)}
                    style={btnDisableStyle(prevBtnDisableStatus)}
                >
                    Prev
            </Link>

                {pagesArr.map((pl, key) => {
                    let pointerEvents = { pointerEvents: 'auto' };
                    let className = '';
                    if (props.currentPage === pl) {
                        pointerEvents = { pointerEvents: 'none' };
                        className = 'currentPage';
                    }
                    return (
                        <Link
                            key={key}
                            style={pointerEvents}
                            to={`${window.location.pathname}?p=${pl}`}
                            onClick={() => props.setCurrentPage(pl)}
                            className={className}
                        >
                            {pl}
                        </Link>
                    )
                })}
                <Link
                    to={`${window.location.pathname}?p=${props.currentPage + 1}`}
                    onClick={() => props.setCurrentPage(props.currentPage + 1)}
                    style={btnDisableStyle(nextBtnDisableStatus)}
                >
                    Next
                </Link>
            </div>
        </div>
    );
}

export default Pagination;