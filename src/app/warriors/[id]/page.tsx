import { serverClient } from "@/app/_trpc/serverClient";
import UpdateWarriorForm from "@/components/form/UpdateWarriorForm";

import React from "react";

import FocusCard from "@/components/ui/FocusCard";

const Page = async ({ params }: { params: { id: string } }) => {
  const warrior = await serverClient.warrior.getById({ id: Number(params.id) });
  if (!warrior) {
    return (
      <div className="w-full h-screen flex relative font-iceland text-8xl text-red-500">
        <span className="top-[40vh] absolute left-[30vw] animate-pulse">
          Warrior not found
        </span>
      </div>
    );
  }
  return (
    <section className="h-screen w-full font-iceland text-light-900 flex flex-row justify-between py-8 px-8 max-md:justify-center max-md:items-center">
      <div className="max-w-5x  mx-auto md:px-8 w-full md:max-w-[40vw] max-md:hidden">
        <FocusCard warrior={warrior} />
      </div>

      <UpdateWarriorForm warrior={warrior} />
    </section>
  );
};

export default Page;
