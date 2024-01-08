"use client"

import {getServerSession} from "next-auth";
import {authOptions} from "@/app/lib/auth";
import {redirect} from "next/navigation";
import {signOut, useSession} from "next-auth/react";

export default function test(){
    async function ChatHomepage(){
        const session = await getServerSession(authOptions);
        if(!session){
            redirect("/");
        }else{
            console.log(session);
        }
    }

    async function handleSignOut() {
        await signOut();
    }

    return(
        <div>
            <button onClick={ChatHomepage}>Get Session Details</button>
            <button
                onClick={handleSignOut}
                className="flex items-center justify-center gap-2 rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white ring-red-300 transition duration-100 hover:bg-red-600 md:text-base"
            >
                Logout
            </button>
        </div>
    )
}