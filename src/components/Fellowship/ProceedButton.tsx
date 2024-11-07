"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { useFellowshipStore } from "@/stores/fellowshipStore";
import { cn } from "@/lib/utils";
const ProceedButton = () => {
  const router = useRouter();
  const fellowshipStore = useFellowshipStore();
  const handleDisabled = () => {
    return fellowshipStore.members.length === 0 || !fellowshipStore.ringBearer;
  };
  return (
    <HoverBorderGradient
      containerClassName="rounded-full border-2 border-black self-end mr-4 font-iceland"
      as="button"
      className={cn(
        "bg-black text-yellow-500 font-bold flex items-center space-x-2 text-xl mb-2 ",
        { "text-red-500": handleDisabled() }
      )}
      onClick={() => router.push("/finish")}
      disabled={handleDisabled()}
    >
      Start Journey
    </HoverBorderGradient>
  );
};

export default ProceedButton;
