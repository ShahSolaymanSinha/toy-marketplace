import React from "react";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const SubCategoryCard = ({ car, what }) => {
    const which = what;

    const myStyles = {
        itemShapes: RoundedStar,
        activeFillColor: "#ffb700",
        inactiveFillColor: "#fbf1a9",
    };
    return (
        <div>
            <div className="card card-compact w-96 shadow-xl flex flex-col justify-between h-full">
                <div>
                    <figure>
                        <img src={car?.picture} alt={car?.name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {car.name}</h2>
                        <p>
                            <span className="font-semibold">Price:</span> ${car.price}
                        </p>
                        <Rating style={{ maxWidth: 180 }} value={car?.rating} itemStyles={myStyles} readOnly />
                    </div>
                </div>
                <div className="card-actions justify-center w-full">
                    <Link className="w-full" to={`/toy/${which}/${car?._id}`}>
                        <button className="btn btn-primary w-full">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryCard;
