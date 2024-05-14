"use server";

import fs from "fs/promises";

export async function deleteFile(path: string) {
    const storagePath = `/storage/${path}`;

    await fs.rm(storagePath);
}
