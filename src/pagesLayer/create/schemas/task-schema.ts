import { z } from "zod";

export const taskSchema = z.object({
    title: z.string().min(1).max(50),
    description: z.string().min(1).max(255),
    slug: z.string().min(1).max(50),
});

export type TaskSchema = z.infer<typeof taskSchema>;
