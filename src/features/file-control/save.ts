"use server";

import fs from "fs/promises";

export async function saveFile(file: Blob, fileId: string, entity: string) {
    if (file.size === 0) throw new Error("No file provided", { cause: file });

    const storagePath = `/storage/${entity}`;
    const storageFilePath = `${storagePath}/${fileId}`;

    await fs.mkdir(storagePath, { recursive: true });
    await fs.writeFile(
        storageFilePath,
        new Uint8Array(await file.arrayBuffer()),
    );

    return storageFilePath;
}
