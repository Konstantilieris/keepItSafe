import AddWarriorForm from "@/components/form/AddWarriorForm";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center py-8 px-4 text-light-900 font-iceland ">
      <h1 className="text-lime-500 text-2xl max-md:hidden ml-4 self-start">
        Add your Warrior
      </h1>
      <AddWarriorForm />
    </div>
  );
};

export default page;
