"use client"
import { useState } from 'react';
import Item from "./item";



function ItemList( {items, onItemSelect} ) {

    const [sortBy, setSortBy] = useState("name");

    const sortSetName = () => {
        setSortBy("name");
    }

    const sortSetCategory = () => {
        setSortBy("category");
    }

    const sortSetQuantity = () => {
        setSortBy("quantity");
    }

    let itemsCopy = [...items];

    itemsCopy.sort((a, b) => {
        const nameA = a[sortBy];
        const nameB = b[sortBy];
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });

    return (
        <div>
            <p className='flex flex-row justify-center'>Sort By:</p>
            <div className='flex flex-row justify-center'>
                <button className="p-4 my-2 mx-4 border rounded-lg bg-gray-900 hover:bg-gray-800 disabled:bg-gray-950" onClick={sortSetName} disabled={sortBy=="name"}>Name</button>
                <button className="p-4 my-2 mx-4 border rounded-lg bg-gray-900 hover:bg-gray-800 disabled:bg-gray-950" onClick={sortSetCategory} disabled={sortBy=="category"}>Category</button>
                <button className="p-4 my-2 mx-4 border rounded-lg bg-gray-900 hover:bg-gray-800 disabled:bg-gray-950" onClick={sortSetQuantity} disabled={sortBy=="quantity"}>Quantity</button>
            </div>
            <ul>
                {itemsCopy.map((item, index) => (
                    <Item key={item.id} id={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect}/>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;