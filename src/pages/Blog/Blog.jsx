import React from "react";
import useDocumentTitle from "../../customHook/useDocumentTitle";

const Blog = () => {
    useDocumentTitle("Blog");
    return (
        <div className="mt-10 mb-10">
            <div>
                <h1 className="text-2xl">
                    <span className="font-semibold text-green-500">Question-01:</span> What is an access token and refresh token?
                </h1>
                <p>
                    Access token: Short-lived credential for authentication and authorization. Refresh token: Long-lived credential for obtaining new
                    access tokens without re-authentication.
                </p>
            </div>

            <hr className="mt-5 mb-5" />

            <div>
                <h1 className="text-2xl">
                    <span className="font-semibold text-green-500">Question-02:</span> How access token and refresh token works?
                </h1>
                <p>
                    After authentication, the server issues an access token and refresh token. The access token is used to authorize API requests, while
                    the refresh token obtains new access tokens without re-authentication.
                </p>
            </div>

            <hr className="mt-5 mb-5" />

            <div>
                <h1 className="text-2xl">
                    <span className="font-semibold text-green-500">Question-03:</span> Compare SQL and NoSQL Database?
                </h1>
                <p>
                    SQL databases are relational and use structured query language for data management. NoSQL databases are non-relational and provide
                    flexible data models, scalability, and high performance, often sacrificing complex queries and transaction support.
                </p>
            </div>

            <hr className="mt-5 mb-5" />

            <div>
                <h1 className="text-2xl">
                    <span className="font-semibold text-green-500">Question-04:</span> What is express js? What is Nest JS?
                </h1>
                <p>
                    Express.js is a lightweight web application framework for Node.js. Nest.js is a progressive, TypeScript-based framework for building
                    scalable and maintainable server-side applications using Node.js.
                </p>
            </div>

            <hr className="mt-5 mb-5" />

            <div>
                <h1 className="text-2xl">
                    <span className="font-semibold text-green-500">Question-05:</span> What is MongoDB aggregate and how does it work?
                </h1>
                <p>
                    MongoDB Aggregation is a feature that allows advanced data processing and analysis. It uses a pipeline of stages, applying operations
                    like filtering, grouping, and transforming to data stored in MongoDB, providing powerful querying capabilities.
                </p>
            </div>
        </div>
    );
};

export default Blog;
