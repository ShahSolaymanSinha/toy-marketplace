import React from "react";
import "./pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((pageNumber) => (
                    <li key={pageNumber} className={currentPage === pageNumber ? "active" : ""} onClick={() => onPageChange(pageNumber)}>
                        {pageNumber}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
