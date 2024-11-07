"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import Image from "next/image";
import { IconHome, IconKarate, IconLeaf } from "@tabler/icons-react";

export function FloatingNavbar() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className=" text-red-900 w-full h-full " />,
      href: "/",
    },

    {
      title: "Add Warrior",

      icon: (
        <Image
          src={"/assets/warrior.svg"}
          width={24}
          height={24}
          alt="Next.js"
          className="h-full w-full"
        />
      ),
      href: "/addWarrior",
    },
    {
      title: "Warrior List",
      icon: <IconKarate className="h-full w-full text-red-700" />,
      href: "/warriors",
    },

    {
      title: "FellowshipOfTheRing",
      icon: <IconLeaf className="h-full w-full text-green-500" />,
      href: "/fellowship",
    },
  ];
  return (
    <div className="fixed bottom-0 z-30">
      <FloatingDock
        mobileClassName="fixed bottom-1 right-1 self-end bg-transparent z-[9000]"
        desktopClassName="fixed bottom-0 w-full justify-center bg-transparent" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
