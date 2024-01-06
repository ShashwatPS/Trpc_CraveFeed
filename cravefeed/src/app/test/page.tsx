"use client"

import {getServerSession} from "next-auth";
import {authOptions} from "@/app/lib/auth";
import {redirect} from "next/navigation";

export default function test(){
    async function ChatHomepage(){
        const session = await getServerSession(authOptions);
        if(!session){
            redirect("/test");
        }else{
            console.log(session);
        }
    }
    return(
        <div>
            <button onClick={ChatHomepage}>Get Session Details</button>
        </div>
    )
}