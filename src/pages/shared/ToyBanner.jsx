import React from "react";

const ToyBanner = ({ car }) => {
    return (
        <div>
            <div className="hero h-[60vh] bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={car?.picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{car?.name}</h1>
                        <p className="py-1">
                            <span className="font-semibold">Seller</span>: {car?.brand}
                        </p>
                        <p className="py-1">
                            <span className="font-semibold">Email</span>: {car?.brand}@gmail.com
                        </p>
                        <p className="py-1">
                            <span className="font-semibold">Price</span>: {car?.price}
                        </p>
                        <p className="py-1">
                            <span className="font-semibold">Stock</span>: 14
                        </p>
                        {/* <p className="py-1">
                            <span className="font-semibold">Description</span>: This car is faster that bullet train. (Toy Bullet Train 😅)
                        </p> */}
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                        {/* The button to open modal */}
                        <label htmlFor="my-modal" className="btn">
                            View Details
                        </label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">{car?.name}</h3>
                                <p className="py-4">This car is faster that bullet train. (Toy Bullet Train 😅)</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn">
                                        Ok
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyBanner;
