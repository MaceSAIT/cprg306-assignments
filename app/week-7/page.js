"use client"
import { useState } from 'react';
import ItemList from "./item-list";
import { NewItemCounter } from "./new-item";

/*
export const metadata = {
    title: "Week 7",
    description: "Week 7 Assignment",
}
*/

export default function Page() {

    let itemsData = require('./items.json');

    const [items, addItems] = useState(itemsData);

    const handleAddItem = (itemToAdd) => {
        addItems(prevItems => [...prevItems, itemToAdd]);
    }


    return(
        <main>
            <h1 className="text-3xl font-bold m-6 text-center">Week 7</h1>
            <NewItemCounter onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    )
};