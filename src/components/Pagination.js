
// Object.defineProperty(exports, "__esModule", { value: true });

// import React from 'react'

// function Pagination() {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Pagination

import React, {useState} from "react";
const Pagination = function (arg) {
    const contentPerPage = arg.contentPerPage, count = arg.count;
    const states = useState(1), page = states[0], setPage = states[1];
    const [canNextPage, setCanNextPage] = useState(true); 
    const [canPrevPage, setCanPrevPage] = useState(false); 
    // console.log(states)
    console.log(states[1])

    const pageCount = Math.ceil(count / contentPerPage);
    const lastContentIndex = page * contentPerPage;
    const firstContentIndex = lastContentIndex - contentPerPage;

    const changePage = function (direction) {
        setPage(function (state) {
    
            if (direction) {                
                if (state === pageCount) {

                    setCanNextPage(false)
                    setCanPrevPage(true)
                    return state;
                }
                setCanPrevPage(true)
                setCanNextPage(true)
                return state + 1;
            }
            else {
                if (state === 1) {
                    setCanPrevPage(false)
                    setCanNextPage(true)
                    return state;
                }
                setCanPrevPage(true)
                setCanNextPage(true)
                return state - 1;
            }
        });
    };
    const handleSetPage = function (num) {
        if (num >= pageCount) {
            setPage(pageCount);
            setCanNextPage(false);
            setCanPrevPage(true);
        }
        else if (num <= 1) {
            setPage(1);
            setCanNextPage(true);
            setCanPrevPage(false);
        }
        else {
            setPage(num);
            setCanNextPage(true);
            setCanPrevPage(true);
        }
    };
    return {
        totalPages: pageCount,

        nextPage: function () { return changePage(true); },
        prevPage: function () { return changePage(false); },
        setPage: handleSetPage,
        firstContentIndex: firstContentIndex,
        lastContentIndex: lastContentIndex,
        page: page,
        canNext : canNextPage,
        canPrev : canPrevPage
    };
};
export default Pagination;