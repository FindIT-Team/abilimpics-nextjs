import { z } from "zod";

export const fileSchema = z.object({
    name: z.string().min(1).max(50),
});

export type FileSchema = z.infer<typeof fileSchema>;
