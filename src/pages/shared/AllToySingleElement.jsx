import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AllToySingleElement = ({ toy, count }) => {
    return (
        <tr>
            {/* <td>{toy?.sellerName}</td> */}
            <td className="flex flex-col font-semibold">
                <div className="avatar w-fit">
                    <div className="w-24 rounded-full">
                        <img src={toy?.picture} alt="" />
                    </div>
                </div>
                <div className="w-fit">{toy?.sellerName}</div>
            </td>
            <td>{toy?.toyName}</td>
            <td>{toy?.subCategory}</td>
            <td>{toy?.price}</td>
            <td>{toy?.quantity}</td>
            <td>
                <Link to={`/added-single-toy/${toy?._id}`}>
                    <button className="btn">View Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default AllToySingleElement;
