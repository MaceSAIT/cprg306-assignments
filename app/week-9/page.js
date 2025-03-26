"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import { useState,useEffect } from "react";
import { redirect } from 'next/navigation'
import Link from 'next/link'
 

export default function Page(){

    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    

    // Create async function for async calls
    const signInAndOut = async () => {
        if(user === null){
          await gitHubSignIn();
        }
        if(user){
          await firebaseSignOut();
        }
    };
    //signInAndOut();


    if (user){
        //redirect('/week-9/shopping-list')
        return (
            <div className='flex flex-col justify-center w-auto pt-20'>
                <p className="text-lg text-gray-200 font-semibold text-center">Welcome back, {user.displayName} ({user.email})</p>
                <Link className="p-4 m-4 border rounded-lg bg-gray-900 text-center mx-auto text-lg text-gray-200 font-semibold text-center" href={{pathname:'/week-9/shopping-list'}}>Open Page</Link>
                <button className="p-4 m-4 border rounded-lg bg-gray-900 text-center mx-auto text-lg text-gray-200 font-semibold text-center" onClick={signInAndOut}>Logout</button>
            </div>
        );
    } else {
        return (
            <div className='flex flex-col justify-center w-auto pt-20'>
                <p className="text-lg text-gray-200 font-semibold text-center">Welcome, please login.</p>
                <button className="p-4 m-4 border rounded-lg bg-gray-900 text-center mx-auto text-lg text-gray-200 font-semibold text-center" onClick={signInAndOut}>Login</button>
            </div>
        );
    }
};