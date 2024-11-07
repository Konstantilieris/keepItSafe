import { warriorRouter } from "./routers/warriorRouter";
import { router } from "./trpc";

export const appRouter = router({
  warrior: warriorRouter, // Integrate the warriorRouter here
});

export type AppRouter = typeof appRouter;
