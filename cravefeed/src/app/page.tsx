"use client";

import { trpc } from './_trpc/client';
import {z} from "zod";

export default function IndexPage() {
  const mutation = trpc.getfollowing.useMutation();
  const signup = () => {
    mutation.mutate({
        Id: 1,
    })
      const responseData = mutation.data;
      console.log("Mutation Data: ",responseData);
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