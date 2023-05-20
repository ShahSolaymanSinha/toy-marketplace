import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToySingleElement from "../shared/AllToySingleElement";
import Pagination from "../shared/Pagination/Pagination";
import Loader from "../shared/Loader/Loader";

const AllToys = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageData, setPageData] = useState([]);
    const allToys = useLoaderData();
    const [pageLimit] = useState(10);
    const [loading, setLoading] = useState(false);

    const totalPages = Math.ceil(allToys.length / pageLimit);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const data = await fetch(`http://localhost:5000/added-toys?page=${currentPage}&limit=${pageLimit}`);
            const dataParsed = await data.json();
            setPageData(dataParsed);
            setLoading(false);
        };

        loadData();
    }, [currentPage]);

    return (
        <div className="mt-10">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>{pageData && pageData?.map((toy) => <AllToySingleElement key={toy?._id} toy={toy}></AllToySingleElement>)}</tbody>
                </table>
            </div>
            <div className="mb-10 mt-10">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </div>
    );
};

export default AllToys;
