"use client"
import { useState } from 'react';
import Item from "./item";



function ItemList() {

    let items = require('./items.json');
    const [sortBy, setSortBy] = useState("name");

    const sortClickHandler = () => {
        
    }


    items.sort((a, b) => {
        const nameA = a[sortBy];
        const nameB = b[sortBy];
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });

    return (
        <ul>
            {items.map((item, index) => (
                <Item name={item.name} quantity={item.quantity} category={item.category}/>
            ))}
        </ul>
    );
}

export default ItemList;