import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyBanner from "../shared/ToyBanner";

const SingleToy = ({ toy }) => {
    const [data] = useLoaderData();
    console.log(data);
    return (
        <div>
            <ToyBanner car={data} toy={toy}></ToyBanner>
        </div>
    );
};

export default SingleToy;
