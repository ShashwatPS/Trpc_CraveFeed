"use client";

import { signIn, useSession } from 'next-auth/react'

export default function Home() {
    return (
        <button
            onClick={() => signIn("github")}
            className="flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-8 py-3 text-center text-sm font-semibold text-white ring-teal-300 transition duration-100 hover:bg-teal-600 md:text-base"
        >
            Login
        </button>
    );
}
