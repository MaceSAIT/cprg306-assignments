"use client"
import { useState } from 'react';
import ItemList from "./item-list";
import { NewItemCounter } from "./new-item";
import { LoadMealIdeas } from "./meal-ideas";

/*
export const metadata = {
    title: "Week 8",
    description: "Week 8 Assignment",
}
*/






export default function Page() {

    let itemsData = require('./items.json');

    const [items, addItems] = useState(itemsData);
    const [selectedItemName,setSelectedItemName] = useState("defualt");

    const handleAddItem = (itemToAdd) => {
        addItems(prevItems => [...prevItems, itemToAdd]);
    }

    const handleItemSelect = (name) => {
        console.log("Click!")
        console.log(name)
        setSelectedItemName(name)
    };

    const ingredient = "defualt";

    

    return(
        <main>
            <h1 className="text-3xl font-bold m-6 text-center">Week 8</h1>
            <NewItemCounter onAddItem={handleAddItem}/>
            <div className='flex flex-row justify-around'>
                <div className='flex flex-col justify-center w-1/2'>
                    <ItemList items={items} onItemSelect={handleItemSelect}/>
                </div>
                <div className='flex flex-col justify-top w-1/2'>
                    <LoadMealIdeas ingredient={selectedItemName}/>
                </div>
            </div>

        </main>
    )
};