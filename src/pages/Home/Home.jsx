import React from "react";
import Banner from "../shared/Banner";
import Gallery from "../shared/Gallery";
import SubCategory from "../shared/SubCategory";
import { useLoaderData } from "react-router-dom";
import BestSellingTrucks from "../shared/BestSellingTrucks";
import BestSellingPoliceCars from "../shared/BestSellingPoliceCars";

const Home = () => {
    const cars = useLoaderData()[0];
    const trucks = useLoaderData()[1];
    const policeCars = useLoaderData()[2];
    return (
        <div>
            <Banner></Banner>
            <Gallery cars={cars}></Gallery>
            <SubCategory cars={cars} trucks={trucks} policeCars={policeCars}></SubCategory>
            <BestSellingTrucks trucks={trucks}></BestSellingTrucks>
            <BestSellingPoliceCars policeCars={policeCars}></BestSellingPoliceCars>
        </div>
    );
};

export default Home;
