import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = (props) => {

    // toggle pointerEvents css property to none or auto.
    let prevBtnDisableStatus = props.currentPage === 1 ? 'none' : 'auto';
    let nextBtnDisableStatus = props.currentPage === props.pageCount ? 'none' : 'auto';

    let pagesArr = [];
    for (let i = 1; i <= props.pageCount; i++) {
        pagesArr.push(i);
    }

    return (
        <>
            <Link
                to={`${window.location.pathname}?p=${props.currentPage - 1}`}
                onClick={() => props.setCurrentPage(props.currentPage - 1)}
                style={{ pointerEvents: prevBtnDisableStatus }}
            >
                Prev
            </Link>
            {pagesArr.map((pl, key) => {
                let pointerEvents;
                if (props.currentPage === key + 1) {
                    pointerEvents = { pointerEvents: 'none' };
                } else {
                    pointerEvents = { pointerEvents: 'auto' };
                }
                return (
                    <Link
                        key={key}
                        style={pointerEvents}
                        to={`${window.location.pathname}?p=${pl}`}
                        onClick={() => props.setCurrentPage(pl)}
                    >
                        {pl}
                    </Link>
                )
            })}
            <Link
                to={`${window.location.pathname}?p=${props.currentPage + 1}`}
                onClick={() => props.setCurrentPage(props.currentPage + 1)}
                style={{ pointerEvents: nextBtnDisableStatus }}
            >
                Next
            </Link>
        </>
    );
}

export default Pagination;