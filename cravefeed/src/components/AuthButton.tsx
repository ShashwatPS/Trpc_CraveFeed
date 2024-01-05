import { signIn, useSession } from 'next-auth/react';

const AuthButton: React.FC = () => {
    const { data: session } = useSession<Session>();

    const handleSignIn = async () => {
        await signIn('github');
    };

    return (
        <div>
            {session ? (
                // User is authenticated
                <p>Welcome, {session.user?.name}!</p>
            ) : (
                // User is not authenticated, show login button
                <button onClick={handleSignIn}>Login with Google</button>
            )}
        </div>
    );
};

export default AuthButton;
