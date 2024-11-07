// warriorRouter.ts
import { prisma } from "../server";
import { publicProcedure, router } from "../trpc";
import { z } from "zod"; // For input validation

export const warriorRouter = router({
  // Create a new warrior
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        isEvil: z.boolean().optional().default(false),
        race: z.string(),
        skill: z.string().optional(),
        age: z.number().int().optional(),
        imageUrl: z.string().optional().default("/assets/default-warrior.png"),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.warrior.create({
        data: input,
      });
    }),

  // Read (Get all warriors)
  getAll: publicProcedure.query(async () => {
    return await prisma.warrior.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),

  // Read (Get a single warrior by ID)
  getById: publicProcedure
    .input(z.object({ id: z.number().int() }))
    .query(async ({ input }) => {
      return await prisma.warrior.findUnique({
        where: { id: input.id },
      });
    }),

  // Update a warrior by ID
  update: publicProcedure
    .input(
      z.object({
        id: z.number().int(),
        name: z.string().optional(),
        isEvil: z.boolean().optional(),
        race: z.string().optional(),
        skill: z.string().optional(),
        age: z.number().int().optional(),
        imageUrl: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      return await prisma.warrior.update({
        where: { id },
        data,
      });
    }),

  // Delete a warrior by ID
  delete: publicProcedure
    .input(z.object({ id: z.number().int() }))
    .mutation(async ({ input }) => {
      return await prisma.warrior.delete({
        where: { id: input.id },
      });
    }),
});
