import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyBanner from "../shared/ToyBanner";

const SingleToy = () => {
    const [data] = useLoaderData();
    console.log(data);
    return (
        <div>
            <ToyBanner car={data}></ToyBanner>
        </div>
    );
};

export default SingleToy;
