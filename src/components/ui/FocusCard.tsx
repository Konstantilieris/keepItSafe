"use client";
import { IconSquareLetterXFilled } from "@tabler/icons-react";
import React from "react";
import { toast } from "sonner";
import { WobbleCard } from "./WobbleCard";
import { Warrior } from "@prisma/client";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { HoverBorderGradient } from "./hover-border-gradient";
import { cn } from "@/lib/utils";
import { trpc } from "@/app/_trpc/client";
import { useRouter } from "next/navigation";
const FocusCard = ({ warrior }: { warrior: Warrior }) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const deleteWarrior = trpc.warrior.delete.useMutation();
  if (!warrior) {
    return null;
  }

  const handleDelete = async () => {
    try {
      await deleteWarrior.mutateAsync({ id: warrior.id });
      toast.success(`Warrior ${warrior.name} removed successfully`);
    } catch (error) {
      toast.error("Failed to remove warrior");
    } finally {
      setOpen(false);
      router.push("/warriors");
    }
  };

  return (
    <>
      {open && (
        <div className="fixed z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Alert className="z-60 text-xl overflow-hidden relative bg-black text-light-900 min-h-[20vh] ">
            <IconSquareLetterXFilled
              className="h-6 w-6 font-iceland cursor-pointer text-red-500 bg-white hover:scale-110"
              onClick={() => setOpen(false)}
            />
            <AlertTitle className="text-2xl ml-1">
              Are you sure about the action!?
            </AlertTitle>
            <AlertDescription className="text-xl text-center flex flex-col w-full h-full mt-8 gap-4 px-4">
              You are going to delete this character; this action is
              irreversible!
              <HoverBorderGradient
                containerClassName="rounded-full border-2 border-black self-end"
                as="button"
                className="bg-black text-red-500 font-bold flex items-center space-x-2 text-lg mb-2 "
                onClick={handleDelete}
              >
                Delete Warrior
              </HoverBorderGradient>
            </AlertDescription>
          </Alert>
        </div>
      )}

      <WobbleCard
        containerClassName={cn(
          "w-full h-[85vh] bg-transparent flex px-8 w-full relative ",
          {
            "bg-red-900": warrior.isEvil,
          }
        )}
      >
        <h1 className="absolute top-50 left-12 text-2xl text-light-900">
          {warrior?.name}
        </h1>
        <IconSquareLetterXFilled
          className={cn(
            "absolute top-50 right-12 text-2xl text-red-900 hover:scale-125 hover:animate-pulse",
            {
              "text-light-900": warrior.isEvil,
            }
          )}
          onClick={() => setOpen(true)}
        />
        <Image
          src={warrior.imageUrl}
          width={500}
          height={500}
          alt="linear demo image"
          className="object-contain rounded-xl  h-full w-full"
        />
      </WobbleCard>
    </>
  );
};

export default FocusCard;
