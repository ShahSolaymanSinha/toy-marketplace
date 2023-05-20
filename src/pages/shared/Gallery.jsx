import React from "react";
import GalleryCard from "./GalleryCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = ({ cars }) => {
    AOS.init();
    return (
        <div className="mt-10">
            <div>
                <h1 data-aos="zoom-in" className="text-4xl font-bold mb-5 text-center">Our Best Selling Cars (Gallery)</h1>
            </div>
            <div data-aos="zoom-out" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr auto-cols-fr gap-10">
                {cars.map((car) => (
                    <GalleryCard key={car._id} imageUrl={car?.picture}></GalleryCard>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
