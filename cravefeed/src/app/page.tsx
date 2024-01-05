"use client";

import { trpc } from './_trpc/client';

export default function IndexPage() {
  const mutation = trpc.user.signUp.useMutation();
  const signup = () => {
    mutation.mutate({
      username: "Shaurya Singh" ,
      email: "shashwat123student@gmail.com" ,
      password : "spsnspssps",
    })
  }
  return(
      <div>
        <h1>Button for checking</h1>
        <button onClick={signup} disabled={mutation.isLoading}>
          Login
        </button>
        {mutation.error && <p>Something went wrong! {mutation.error.message}</p>}
      </div>
  )
}