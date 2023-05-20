import React from "react";
import GalleryCard from "./GalleryCard";
import AOS from "aos";
import "aos/dist/aos.css";

const BestSellingTrucks = ({ trucks }) => {
    AOS.init();
    return (
        <div>
            <div className="mt-20">
                <div>
                    <h1 data-aos="fade-right" data-aos-offset="100" data-aos-duration="200" className="text-4xl font-bold mb-5 text-center">
                        Our Best Selling Trucks
                    </h1>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-duration="200"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr auto-cols-fr gap-10">
                    {trucks.map((truck) => (
                        <GalleryCard key={truck._id} imageUrl={truck?.picture}></GalleryCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestSellingTrucks;
