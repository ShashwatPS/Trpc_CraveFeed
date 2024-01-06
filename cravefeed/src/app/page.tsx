"use client";

import { signIn, useSession } from 'next-auth/react'

const LoginButton = () => {
    const { data: session } = useSession()

    return (
        <div>
            {!session ? (
                <button onClick={() => signIn('github')}>Sign in with Google</button>
            ) : (
                <p>Welcome, {session.user.name}!</p>
            )}
        </div>
    )
}

export default function Home() {
    return (
        <div>
            <h1>Welcome to My App</h1>
            <LoginButton />
        </div>
    )
}
