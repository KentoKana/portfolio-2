import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = (props) => {

    let prevBtnDisableStatus = props.currentPage === 1 ? true : false;
    let nextBtnDisableStatus = props.currentPage === props.pageCount ? true : false;
    let pagesArr = [];

    for (let i = 1; i <= props.pageCount; i++) {
        pagesArr.push(i);
    }

    return (
        <>
            <button
                disabled={prevBtnDisableStatus}
                onClick={() => props.setCurrentPage(props.currentPage - 1)}
            >
                Prev
            </button>
            {pagesArr.map((pl, key) => {
                if (props.currentPage === key + 1) {
                    return (
                        <button disabled={true} key={key} onClick={() => props.setCurrentPage(pl)}>
                            {pl}
                        </button>
                    )
                } else {
                    return (
                        <button disabled={false} key={key} onClick={() => props.setCurrentPage(pl)}>
                            {pl}
                        </button>
                    )
                }
            })}
            <button
                onClick={() => props.setCurrentPage(props.currentPage + 1)}
                disabled={nextBtnDisableStatus}
            >
                Next
            </button>
        </>
    );
}

export default Pagination;