import { z } from "zod";

export const newsSchema = z.object({
    title: z.string().min(1).max(50),
    content: z.string().min(1),
    slug: z.string().min(1).max(50),
});

export type NewsSchema = z.infer<typeof newsSchema>;
