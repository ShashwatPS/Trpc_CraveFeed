import { appRouter } from '@/trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { PrismaClient } from "@prisma/client";
import providers from "@/components/Providers";

let prisma = new PrismaClient

const handler = (req : Request) =>
    fetchRequestHandler({
        req,
        endpoint: '/api/trpc',
        router: appRouter,
        createContext: ()=> ({
            prisma: { User : prisma.user , Post: prisma.post, Follower: prisma.follower, Like: prisma.like, Comment: prisma.comment}
        }),
    });

export { handler as GET, handler as POST};