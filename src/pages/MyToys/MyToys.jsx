import React, { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../../providers/AuthenticationProvider";
import Pagination from "../shared/Pagination/Pagination";
import AllToySingleElement from "../shared/AllToySingleElement";
import Loader from "../shared/Loader/Loader";
import useDocumentTitle from "../../customHook/useDocumentTitle";

const MyToys = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageData, setPageData] = useState([]);
    const [pageLimit] = useState(10);
    const [siteLoading, setSiteLoading] = useState(true);
    const [totalPages, setTotalPages] = useState();
    const [allToys, setAllToys] = useState([]);
    const [sortData, setSortData] = useState(1);
    useDocumentTitle("My Toys");
    const downArrow = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
        </svg>
    );

    const upArrow = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
        </svg>
    );

    const { user, loading } = useContext(AuthenticationContext);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        fetch(`https://a11-server-side-six.vercel.app/my-all-toys?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setAllToys(data);
                setTotalPages(Math.ceil(data.length / pageLimit));
            });
    }, [user, sortData]);

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(`https://a11-server-side-six.vercel.app/my-toys?email=${user?.email}&limit=${pageLimit}&page=${currentPage}&sort=${sortData}`)
            ).json();
            setPageData(data);
            setSiteLoading(false);
        };

        dataFetch();
    }, [currentPage, user, sortData]);

    if (loading) {
        return <Loader></Loader>;
    }

    if (siteLoading) {
        return <Loader></Loader>;
    }

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
                            <th onClick={() => setSortData(-sortData)} className="flex gap-1">
                                <span>{sortData == 1 ? upArrow : downArrow}</span> Price
                            </th>
                            <th>Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>{pageData && pageData?.map((toy) => <AllToySingleElement key={toy?._id} toy={toy}></AllToySingleElement>)}</tbody>
                </table>
            </div>
            {totalPages && (
                <div className="mb-10 mt-10">
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </div>
            )}
        </div>
    );
};

export default MyToys;
