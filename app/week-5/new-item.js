"use client"
import { use, useState } from "react";

export function NewItemCounter() {



    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const Item = ( itemName, itemQuantity, itemCategory ) => {
        const Name = itemName;
        const Quantity = itemQuantity;
        const Category = itemCategory;
        return ({Name, Quantity, Category});
    };

    const add = () => {
        if (quantity < 20 ){
            setQuantity(quantity + 1);
        }else{
            alert("Can't add past 20");
        }
    };

    const sub = () => {
        if (quantity > 1 ){
            setQuantity(quantity - 1);
        }else{
            alert("Can't subtract past 1");
        }
    };

    // Handle form reset
    const resetForm = () => {
        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    // Handle submit form
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form
        const newItem = Item(); // Create new item and set values
        newItem.Name = name;
        newItem.Quantity = quantity;
        newItem.Category = category;
        console.log(JSON.stringify(newItem)); // Simple stringify output to console
        alert("Name: " + newItem.Name + "\nQuantity: " + newItem.Quantity + "\nCategory: " + newItem.Category); // Nicer formatted output for the user in an alert
        resetForm();
    };

    return (
        <div className='flex flex-col justify-center'>
                <form action="/submit" method="post" className='flex flex-col w-screen-1/2 h-screen-1/2 items-center' onSubmit={handleSubmit}>
                    <label className='p-2 my-2 mx-auto border rounded-lg bg-gray-900' for="name">Name</label>
                        <input value={name} type="text" name="formName" required className='my-2 w-32 text-center text-black' onChange={e => setName(e.target.value)}/>
                    <label className='p-2 my-2 mx-auto border rounded-lg bg-gray-900' for="category">Category</label>
                        <select value={category} className='my-2 w-32 text-center text-black' name="formCategory" onChange={e => setCategory(e.target.value)}>
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                
                    <div className="flex flex-col w-screen-1/2 h-screen-1/2 justify-center items-center">
                        <p className="p-4 my-8 mx-auto border rounded-lg bg-gray-900 text-center">Quantity: {quantity}</p>
                        <div className="flex flex-row w-64 justify-around">
                            <button type="button" className="p-4 my-2 mx-auto border rounded-lg bg-gray-900 hover:bg-gray-800 disabled:bg-gray-950" onClick={add} disabled={quantity>=20}>Add +</button>
                            <button type="button" className="p-4 my-2 mx-auto border rounded-lg bg-gray-900 hover:bg-gray-800 disabled:bg-gray-950" onClick={sub} disabled={quantity<=1}>Sub -</button>
                        </div>
                    </div>
                    <button className='p-2 my-8 mx-auto border rounded-lg bg-green-900 hover:bg-green-800' type="submit">Submit</button>
                </form>
        </div>
    );

};
