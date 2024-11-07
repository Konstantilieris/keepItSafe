"use client";
import React from "react";
import { FellowShipCards } from "../ui/FellowShipCards";
import { useFellowshipStore } from "@/stores/fellowshipStore";

const FellowShip = () => {
  const fellowshipStore = useFellowshipStore();
  const { members } = fellowshipStore;
  if (!members.length) {
    return (
      <div className="text-light-900 text-4xl font-iceland">
        No members hurry!
      </div>
    );
  }
  return (
    <div className="flex flex-row w-full">
      <FellowShipCards cards={members} />
    </div>
  );
};

export default FellowShip;
