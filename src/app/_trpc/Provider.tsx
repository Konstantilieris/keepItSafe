"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { useState } from "react";

import { trpc } from "./client";

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    // Browser should use relative URL
    return "";
  }
  if (process.env.VERCEL_URL) {
    // Reference for vercel.com
    return `https://${process.env.VERCEL_URL}`;
  }
  // Assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export default function Provider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const url = `${getBaseUrl()}/api/trpc`;
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [httpBatchLink({ url })],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
