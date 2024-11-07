import { FocusCards } from "@/components/ui/focus-cards";
import React from "react";
import { serverClient } from "../_trpc/serverClient";

const Warriors = async () => {
  const warriors = await serverClient.warrior.getAll();

  return (
    <div className="h-full w-full py-8 max-md:px-12 relative">
      <h1 className="top-8 left-4 fixed text-4xl font-iceland text-yellow-600 tracking-widest max-md:hidden">
        Welcome to our Guild
      </h1>
      <FocusCards cards={warriors} />
    </div>
  );
};

export default Warriors;
