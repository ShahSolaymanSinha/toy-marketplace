import React from "react";
import GalleryCard from "./GalleryCard";
import AOS from "aos";
import "aos/dist/aos.css";

const BestSellingPoliceCars = ({ policeCars }) => {
    AOS.init();
    return (
        <div>
            <div className="mt-20">
                <div>
                    <h1 data-aos="zoom-in" className="text-4xl font-bold mb-5 text-center">Our Best Selling Police Cars</h1>
                </div>
                <div data-aos="zoom-out" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr auto-cols-fr gap-10">
                    {policeCars.map((car) => (
                        <GalleryCard key={car._id} imageUrl={car?.picture}></GalleryCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestSellingPoliceCars;
