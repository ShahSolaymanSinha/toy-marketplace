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
    useDocumentTitle("My Toys");

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
    }, [user]);

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(`https://a11-server-side-six.vercel.app/my-toys?email=${user?.email}&limit=${pageLimit}&page=${currentPage}`)
            ).json();
            setPageData(data);
            setSiteLoading(false);
        };

        dataFetch();
    }, [currentPage, user]);

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
                            <th>Price</th>
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
