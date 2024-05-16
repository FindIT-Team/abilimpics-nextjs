"use server";

import fs from "fs/promises";

export async function deleteImage(path: string) {
    const storagePath = `/storage/${path}`;

    await fs.rm(storagePath);
}
