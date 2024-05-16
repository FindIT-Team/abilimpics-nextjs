import { z } from "zod";

export const announcementSchema = z.object({
    title: z.string().min(1).max(50),
    content: z.string().min(1),
    slug: z.string().min(1).max(50),
});

export type AnnouncementSchema = z.infer<typeof announcementSchema>;
