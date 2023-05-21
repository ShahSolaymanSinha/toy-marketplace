import React, { useContext, useState } from "react";
import "./addAToy.css";
import { AuthenticationContext } from "../../providers/AuthenticationProvider";
import Swal from "sweetalert2";
import useDocumentTitle from "../../customHook/useDocumentTitle";

const AddAToy = () => {
    const { user } = useContext(AuthenticationContext);

    const [pictureUrl, setPictureUrl] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [availableQuantity, setAvailableQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [selectedOption, setSelectedOption] = useState("sportsCar");
    useDocumentTitle("Add a Toy");

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const toyData = {
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
            body: JSON.stringify(toyData),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((er) => console.log(er));

        // form.pictureUrl.value = "";
        // form.name.value = "";
        // form.select.value = "select";
        // form.pri.value = "";
        // form.rating.value = "";
        // form.quantity.value = "";
        // form.des.value = "";

        setPictureUrl("");
        setName("");
        setPrice("");
        setRating("");
        setAvailableQuantity("");
        setDescription("");

        Swal.fire({
            icon: "success",
            title: "Toy Added Successfully",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="pictureUrl">Picture URL:</label>
                <input type="text" id="pictureUrl" name="pictureUrl" value={pictureUrl} onChange={(e) => setPictureUrl(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="name">Toy Name:</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
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
                <select id="optionField" name="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} required>
                    <option value="sportsCar">Sports Car</option>
                    <option value="truck">Truck</option>
                    <option value="policeCar">Police Car</option>
                </select>
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="number" name="pri" id="price" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} required />
            </div>
            <div>
                <label htmlFor="rating">Rating:</label>
                <input type="number" name="rating" id="rating" value={rating} onChange={(e) => setRating(parseInt(e.target.value))} required />
            </div>
            <div>
                <label htmlFor="availableQuantity">Available Quantity:</label>
                <input
                    type="number"
                    name="quantity"
                    id="availableQuantity"
                    value={availableQuantity}
                    onChange={(e) => setAvailableQuantity(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="des" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>

            <button id="submitBtn" className="btn w-full mb-10" type="submit">
                Submit
            </button>

            <button type="reset">Reset</button>
        </form>
    );
};

export default AddAToy;
