import React from "react";

const GalleryCard = ({ imageUrl }) => {
    return (
        <div>
            <div className="card w-full h-full shadow-xl flex justify-center items-center">
                <figure>
                    <img src={imageUrl} alt="Car Image" />
                </figure>
            </div>
        </div>
    );
};

export default GalleryCard;
