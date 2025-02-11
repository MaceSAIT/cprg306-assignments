"use client"
import { useState } from "react";

export function NewItemCounter() {



    const [quantity, setQuantity] = useState(1);

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

    return (
        <div className="flex flex-col w-screen-1/2 h-screen-1/2 justify-center">
            <p className="p-4 my-8 mx-auto border rounded-lg bg-gray-900 text-center">Quantity: {quantity}</p>
            <button className="p-4 my-2 mx-auto border rounded-lg bg-gray-900 hover:bg-gray-800 disabled:bg-gray-950" onClick={add} disabled={quantity>=20}>Add +</button>
            <button className="p-4 my-2 mx-auto border rounded-lg bg-gray-900 hover:bg-gray-800 disabled:bg-gray-950" onClick={sub} disabled={quantity<=1}>Sub -</button>
        </div>
    );

};
