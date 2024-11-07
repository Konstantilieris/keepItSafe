"use client";
import { useFellowshipStore } from "@/stores/fellowshipStore";
import React from "react";

const Page = () => {
  return (
    <div className="flex min-h-screen justify-center items-center px-4">
      <div className="text-4xl font-iceland text-light-900 text-center ">
        Congratulations! You have successfully assembled the fellowship! VE2MAX
        will carry the ring to Mordor.
      </div>
    </div>
  );
};

export default Page;
