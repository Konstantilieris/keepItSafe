import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/server";
import { prisma } from "@/server/server";

const handler = async (req: Request) => {
  try {
    return await fetchRequestHandler({
      endpoint: "/api/trpc",
      req,
      router: appRouter,
      createContext: () => ({
        prisma,
      }),
    });
  } catch (error) {
    console.error("Error handling request:", error);
    return new Response("An error occurred", { status: 500 });
  }
};

export { handler as GET, handler as POST };
