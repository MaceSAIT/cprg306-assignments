"use client";
import Link from 'next/link'


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
            <div>{typeof(greet)}</div>
            <p>{a}</p>
            <p>{b}</p>
            <p>{c}</p>
            <p>{b[0]}</p>
            <p>{c[2]}</p>

            <button onClick={button}>Click Me</button>
        </main>
    )
};