"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  IconUsersGroup,
  IconSquareRoundedPlusFilled,
} from "@tabler/icons-react";

import Link from "next/link";
import { useFellowshipStore } from "@/stores/fellowshipStore";
interface Warrior {
  id: number;
  name: string;
  isEvil: boolean;
  race: string;
  skill: string | null;
  age: number | null;
  imageUrl: string;
}
export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    fellowshipStore,
  }: {
    card: any;
    index: number;
    hovered: number | null;

    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    fellowshipStore: any;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
        {
          "blur-sm": fellowshipStore.members.some(
            (member: any) => member.id === card.id
          ),
        }
      )}
    >
      <Image
        src={card.imageUrl}
        alt={card.name}
        fill
        className="object-cover absolute inset-0 max-md:object-fill"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-4xl max-md:text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-light-900 to-yellow-600 font-iceland">
          {card.name}
        </div>
      </div>
      <div
        className={cn(
          "absolute top-0 right-2 flex items-end py-8 px-4 transition-opacity duration-300"
        )}
      >
        {fellowshipStore.members.some(
          (member: any) => member.id === card.id
        ) ? (
          <IconUsersGroup className="text-blue-700 " size={40} />
        ) : (
          <IconSquareRoundedPlusFilled
            className={cn("text-yellow-500 hover:scale-125 ", {
              "text-green-500": hovered === index,
            })}
            onClick={() => {
              fellowshipStore.addMember(card);
            }}
          />
        )}
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function AddFellowShipCards({ cards }: { cards: Warrior[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const fellowshipStore = useFellowshipStore();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          fellowshipStore={fellowshipStore}
        />
      ))}
    </div>
  );
}
