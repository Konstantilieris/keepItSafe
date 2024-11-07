import React from "react";
import { serverClient } from "../_trpc/serverClient";
import { Separator } from "@/components/ui/separator";
import FellowShip from "@/components/Fellowship/FellowShip";
import { AddFellowShipCards } from "@/components/ui/addFelowshipCards";
import ProceedButton from "@/components/Fellowship/ProceedButton";

const Page = async () => {
  const warriors = await serverClient.warrior.getAll();

  return (
    <section className="flex flex-col items-center justify-center gap-8 w-full min-h-screen relative py-8 max-md:px-8 ">
      <h1 className="text-yellow-500 text-4xl font-iceland self-start ml-4 max-md:text-center">
        Elrond Calls Forth the Brave – Assemble the Fellowship Now!
      </h1>
      <ProceedButton />
      <FellowShip />
      <Separator className="bg-light-900 my-8 w-full h-1" />
      <div className="h-full w-full">
        <AddFellowShipCards cards={warriors} />
      </div>
    </section>
  );
};

export default Page;
