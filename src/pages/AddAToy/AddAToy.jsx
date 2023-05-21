import React, { useContext, useState } from "react";
import "./addAToy.css";
import { AuthenticationContext } from "../../providers/AuthenticationProvider";
import Swal from "sweetalert2";
import useDocumentTitle from "../../customHook/useDocumentTitle";
import { useLoaderData, useNavigate } from "react-router-dom";

const AddAToy = () => {
    const { user } = useContext(AuthenticationContext);
    const navigate = useNavigate();
    const [toyData] = useLoaderData();
    useDocumentTitle("Add a Toy");

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const pictureUrl = form.pictureUrl.value;
        const name = form.name.value;
        const selectedOption = form.select.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.quantity.value;
        const description = form.description.value;

        const newToyData = {
            picture: pictureUrl,
            toyName: name,
            sellerName: user?.displayName,
            sellerEmail: user?.email,
            subCategory: selectedOption,
            price: price,
            rating: rating,
            quantity: Math.abs(availableQuantity),
            description: description,
        };

        if (toyData) {
            fetch(`http://localhost:5000/update-toy/${toyData?._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newToyData),
            });

            navigate("/my-toys");
        } else {
            fetch("https://a11-server-side-six.vercel.app/add-toy", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newToyData),
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((er) => console.log(er));
        }

        form.pictureUrl.value = "";
        form.name.value = "";
        form.select.value = "";
        form.price.value = "";
        form.rating.value = "";
        form.quantity.value = "";
        form.description.value = "";

        Swal.fire({
            icon: "success",
            title: "Toy Added Successfully",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="pictureUrl">Picture URL:</label>
                <input type="text" id="pictureUrl" name="pictureUrl" defaultValue={toyData ? toyData.picture : pictureUrl} required />
            </div>
            <div>
                <label htmlFor="name">Toy Name:</label>
                <input type="text" name="name" id="name" defaultValue={toyData ? toyData.toyName : name} required />
            </div>
            <div>
                <label htmlFor="sellerName">Seller Name:</label>
                <input type="text" name="sn" id="sellerName" value={user ? user?.displayName : ""} disabled />
            </div>
            <div>
                <label htmlFor="sellerEmail">Seller Email:</label>
                <input type="email" name="se" id="sellerEmail" value={user ? user?.email : ""} disabled />
            </div>
            <div>
                <label htmlFor="optionField">Select a Sub-Category:</label>
                <select id="optionField" name="select" defaultValue={toyData ? toyData.subCategory : selectedOption} required>
                    <option value="sportsCar">Sports Car</option>
                    <option value="truck">Truck</option>
                    <option value="policeCar">Police Car</option>
                </select>
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="number" name="price" id="price" defaultValue={toyData ? toyData.price : price} required />
            </div>
            <div>
                <label htmlFor="rating">Rating:</label>
                <input type="number" name="rating" id="rating" defaultValue={toyData ? toyData.rating : rating} required />
            </div>
            <div>
                <label htmlFor="availableQuantity">Available Quantity:</label>
                <input
                    type="number"
                    name="quantity"
                    id="availableQuantity"
                    defaultValue={toyData ? toyData.quantity : availableQuantity}
                    onChange={(e) => setAvailableQuantity(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    defaultValue={toyData ? toyData.description : description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>

            <button id="submitBtn" className="btn w-full mb-10" type="submit">
                Submit
            </button>
        </form>
    );
};

export default AddAToy;
