"use client"
import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from "./item-list";
import { NewItemCounter } from "./new-item";
import { LoadMealIdeas } from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { redirect } from 'next/navigation';
import { getItems, addItem } from "../_services/shopping-list-service";








export default function Page() {

    //let itemsData = require('./items.json');



    const [items, addItems] = useState([]);
    const [selectedItemName,setSelectedItemName] = useState("defualt");

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function loadItems() {
        try {
            const userItems = await getItems(user.uid);
            addItems(userItems);
        } catch (error) {
            console.error("Error loading items:", error);
        }
    }


    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]);

    const handleAddItem = async (itemToAdd) => {
        if (user && user.uid) {
            try {
                
                itemToAdd.id = await addItem(user.uid,itemToAdd);

                addItems(prevItems => [...prevItems, itemToAdd]);

            } catch (error) {
                console.error("Error adding item:", error)
            }
        } else {
            console.log("User not logged in, cannot add item.");
        }
    }

    const handleItemSelect = (name) => {
        console.log("Click!")
        console.log(name)
        setSelectedItemName(name)
    };

    const ingredient = "defualt";




    // check if user is not null
    if (user != null){

        return(
            <main>
                <h1 className="text-3xl font-bold m-6 text-center">Shopping List</h1>
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

    } else {
        redirect('/')
    };
};