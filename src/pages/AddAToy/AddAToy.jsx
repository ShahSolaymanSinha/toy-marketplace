import React, { useContext } from "react";
import "./addAToy.css";
import { AuthenticationContext } from "../../providers/AuthenticationProvider";
import Swal from "sweetalert2";
import useDocumentTitle from "../../customHook/useDocumentTitle";
import { useNavigate } from "react-router-dom";

const AddAToy = () => {
    const { user } = useContext(AuthenticationContext);
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
                <input type="text" id="pictureUrl" name="pictureUrl" required />
            </div>
            <div>
                <label htmlFor="name">Toy Name:</label>
                <input type="text" name="name" id="name" required />
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
                <select id="optionField" name="select" required>
                    <option value="sportsCar">Sports Car</option>
                    <option value="truck">Truck</option>
                    <option value="policeCar">Police Car</option>
                </select>
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="number" name="price" id="price" required />
            </div>
            <div>
                <label htmlFor="rating">Rating:</label>
                <input type="number" name="rating" id="rating" required />
            </div>
            <div>
                <label htmlFor="availableQuantity">Available Quantity:</label>
                <input type="number" name="quantity" id="availableQuantity" required />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" onChange={(e) => setDescription(e.target.value)} required />
            </div>

            <button id="submitBtn" className="btn w-full mb-10" type="submit">
                Submit
            </button>
        </form>
    );
};

export default AddAToy;
