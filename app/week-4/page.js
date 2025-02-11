"use client";
import Link from 'next/link'
import add, { NewItemCounter } from './new-item'

/*{

// Temp removed due to "use client"

export const metadata = {
    title: "Week 4",
    description: "Week 4 assignment page.",
}
}*/


let a = [];
let b = [1,2,3,4,5];
let c = ["Cat", "Dog", "Rabbit", "Bird"];

// The arrow => can replace the "function" keyword
// Instead of:
// let greet = function (name) {
// it can be:
let greet = (name) => {
    return "Hello, " + name;
};

function button() {
    alert("This is an alert");
}

export default function Page() {
    //return(<div>{greet("Mace")}</div>);
    return(
        <main>
            <h1 className="text-3xl font-bold m-6 text-center">Week 4</h1>
            <NewItemCounter/>
        </main>
    )
};