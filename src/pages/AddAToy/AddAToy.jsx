import React, { useContext, useState } from "react";
import "./addAToy.css";
import { AuthenticationContext } from "../../providers/AuthenticationProvider";

const AddAToy = () => {
    const { user } = useContext(AuthenticationContext);

    const [pictureUrl, setPictureUrl] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [availableQuantity, setAvailableQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [selectedOption, setSelectedOption] = useState("select");

    const handleSubmit = (event) => {
        event.preventDefault();

        const toyData = {
            picture: pictureUrl,
            toyName: name,
            sellerName: user?.displayName,
            sellerEmail: user?.email,
            subCategory: selectedOption,
            price: price,
            rating: rating,
            quantity: availableQuantity,
            description: description,
        };

        fetch("http://localhost:5000/add-toy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(toyData),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((er) => console.log(er));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="pictureUrl">Picture URL:</label>
                <input type="text" id="pictureUrl" value={pictureUrl} onChange={(e) => setPictureUrl(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="name">Toy Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="sellerName">Seller Name:</label>
                <input type="text" id="sellerName" value={user ? user?.displayName : ""} disabled />
            </div>
            <div>
                <label htmlFor="sellerEmail">Seller Email:</label>
                <input type="email" id="sellerEmail" value={user ? user?.email : ""} disabled />
            </div>
            <div>
                <label htmlFor="optionField">Select a Sub-Category:</label>
                <select id="optionField" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                    <option value="select">-- Select --</option>
                    <option value="sportsCar">Sports Car</option>
                    <option value="truck">Truck</option>
                    <option value="policeCar">Police Car</option>
                </select>
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="rating">Rating:</label>
                <input type="number" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="availableQuantity">Available Quantity:</label>
                <input type="number" id="availableQuantity" value={availableQuantity} onChange={(e) => setAvailableQuantity(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <button className="btn w-full mb-10" type="submit">
                Submit
            </button>
        </form>
    );
};

export default AddAToy;
