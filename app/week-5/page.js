"use client";
import Link from 'next/link'
import add, { NewItemCounter } from './new-item'



function button() {
    alert("This is an alert");
}

export default function Page() {
    //return(<div>{greet("Mace")}</div>);

    return(
        <main>
            <h1 className="text-3xl font-bold m-6 text-center">Week 5</h1>
            <NewItemCounter/>
        </main>
    )
};