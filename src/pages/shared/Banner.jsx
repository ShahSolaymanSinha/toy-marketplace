import React from "react";

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url("https://img.freepik.com/free-vector/when-game-start-player-can-select-racing-car-game-library-june-up-performance-racing-car_1150-47250.jpg?w=2000&t=st=1684473703~exp=1684474303~hmac=9ff3c164f78b0ee4ff00938e704c6f7fc82e8e06899d50b1437d0cc5dd899449")`,
            }}>
            <div className="hero-overlay bg-opacity-60 rounded-md"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-10 text-8xl font-bold font-['Pacifico']">Speedy Sports</h1>
                    <p className="mb-5 text-2xl">
                        Welcome to our exciting world of toy cars! Get ready to rev up your imagination and embark on an extraordinary adventure with our
                        exceptional collection of toy cars. We are your ultimate destination for all things miniature automotive, where dreams and
                        playfulness collide.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
