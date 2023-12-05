// Zod is a TypeScript-first schema declaration and validation library
import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required."
  }),
});