"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { useRouter } from "next/navigation";
import { trpc } from "@/app/_trpc/client";
import router from "next/router";

const warriorSchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number().min(18, "Age must be at least 18"),
  skill: z.string().optional(),
  isEvil: z.boolean(),
  race: z.string(),
});

const AddWarriorForm: React.FC = () => {
  const router = useRouter();
  const createWarrior = trpc.warrior.create.useMutation();
  const form = useForm<z.infer<typeof warriorSchema>>({
    resolver: zodResolver(warriorSchema),
    defaultValues: {
      name: "",
      age: 18,
      isEvil: false,
      race: "",
      skill: "",
    },
  });
  async function onSubmit(values: z.infer<typeof warriorSchema>) {
    try {
      // Call the create mutation with the form values
      await createWarrior.mutateAsync(values);

      // Show success message on successful creation
      toast.success("Warrior added successfully");
    } catch (error) {
      // Handle any errors that occur during creation
      toast.error("Failed to add warrior. Please try again.");
      console.error("Error creating warrior:", error);
    } finally {
      form.reset();
      router.push("/warriors");
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8  max-md:w-full md:w-[40vw]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Name</FormLabel>
              <FormControl className="min-h-[5vh]">
                <Input placeholder="Warrior Name" className="px-4" {...field} />
              </FormControl>
              <FormDescription className="text-lg text-lime-500">
                This is your public display name.
              </FormDescription>
              <FormMessage className="text-lg text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Age</FormLabel>
              <FormControl className="min-h-[5vh] ">
                <Input
                  type="number"
                  className="px-4"
                  {...field}
                  onChange={(e) =>
                    field.onChange(
                      e.target.value ? parseInt(e.target.value, 10) : ""
                    )
                  }
                />
              </FormControl>
              <FormDescription className="text-lg text-lime-500">
                You must be at least 18 years old.
              </FormDescription>
              <FormMessage className="text-lg text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="race"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Race</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="min-h-[5vh] text-xl px-4">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="text-xl text-light-900 bg-dark-100 px-8 font-iceland ">
                    <SelectItem
                      value="Elf"
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                    >
                      Elf
                    </SelectItem>
                    <SelectItem
                      value="Dwarf"
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                    >
                      Dwarf
                    </SelectItem>
                    <SelectItem
                      value="Hobbit"
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                    >
                      Hobbit
                    </SelectItem>
                    <SelectItem
                      value="Human"
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                    >
                      Human
                    </SelectItem>
                    <SelectItem
                      value="Orc"
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                    >
                      Orc
                    </SelectItem>
                    <SelectItem
                      value="Ent"
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                    >
                      Ent
                    </SelectItem>
                    <SelectItem
                      value="Wizard"
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                    >
                      Wizard
                    </SelectItem>
                    <SelectItem
                      value="Uruk-hai"
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                    >
                      Uruk-hai
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription className="text-lg text-lime-500">
                Choose race of warrior.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="skill"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Skill</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="min-h-[5vh] text-xl px-4">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="text-xl text-light-900 bg-dark-100 px-8  font-iceland ">
                    <SelectItem
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                      value="Swordsmanship"
                    >
                      Swordsmanship
                    </SelectItem>
                    <SelectItem
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                      value="Archery"
                    >
                      Archery
                    </SelectItem>
                    <SelectItem
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                      value="Stealth"
                    >
                      Stealth
                    </SelectItem>
                    <SelectItem
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                      value="Spellcasting"
                    >
                      Spellcasting
                    </SelectItem>
                    <SelectItem
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                      value="Tracking"
                    >
                      Tracking
                    </SelectItem>
                    <SelectItem
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                      value="Herb Lore"
                    >
                      Herb Lore
                    </SelectItem>
                    <SelectItem
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                      value="Crafting"
                    >
                      Crafting
                    </SelectItem>
                    <SelectItem
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                      value="Leadership"
                    >
                      Leadership
                    </SelectItem>
                    <SelectItem
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                      value="Mining"
                    >
                      Mining
                    </SelectItem>
                    <SelectItem
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                      value="Beast Taming"
                    >
                      Beast Taming
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription className="text-lg text-lime-500">
                Choose skill of warrior.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isEvil"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">Is Evil?</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value) => field.onChange(value === "true")}
                  defaultValue={field.value.toString()}
                >
                  <SelectTrigger className="min-h-[5vh] text-xl px-4">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="text-xl text-light-900 bg-dark-100 px-8 font-iceland ">
                    <SelectItem
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                      value="true"
                    >
                      Yes
                    </SelectItem>
                    <SelectItem
                      className="hover:animate-pulse text-xl hover:text-lime-500 transition-transform duration-300"
                      value="false"
                    >
                      No
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription className="text-lg text-lime-500">
                Choose if warrior is evil.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <HoverBorderGradient
          containerClassName="rounded-full border-2 border-black mx-auto"
          as="button"
          className="bg-black text-lime-500 font-bold flex items-center space-x-2 text-xl mb-2 "
          onClick={form.handleSubmit(onSubmit)}
        >
          Add Warrior
        </HoverBorderGradient>
      </form>
    </Form>
  );
};

export default AddWarriorForm;
