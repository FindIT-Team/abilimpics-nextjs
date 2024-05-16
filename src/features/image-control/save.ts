"use server";

import fs from "fs/promises";
import child_process from "node:child_process";

export async function saveImage(image: Blob, id: string, entity: string) {
    if (!image.type.startsWith("image"))
        throw new Error("Not an image", { cause: image });

    const storagePath = `/storage/${entity}`;

    let resultPath;

    if (image.type !== "image/svg+xml") {
        const cachePath = `/.cache/${entity}`;

        const cacheFilePath = `${cachePath}/${id}`;
        const storageFilePath = `${storagePath}/${id}.webp`;

        await fs.mkdir(cachePath, { recursive: true });
        await fs.writeFile(
            cacheFilePath,
            new Uint8Array(await image.arrayBuffer()),
        );

        await fs.mkdir(storagePath, { recursive: true });
        const cmd = `cwebp -lossless -exact -q 100 ${cacheFilePath} -o ${storageFilePath}`;
        try {
            child_process.execSync(cmd, { encoding: "utf-8" });
        } catch (e) {
            throw new Error("Error while converting image", { cause: image });
        }

        await fs.rm(cacheFilePath);

        resultPath = storageFilePath;

        if ((await fs.readdir(cachePath)).length === 0)
            await fs.rmdir(cachePath);
        if ((await fs.readdir("/.cache")).length === 0)
            await fs.rmdir("/.cache");
    } else {
        const storageFilePath = `${storagePath}/${id}.svg`;

        await fs.mkdir(storagePath, { recursive: true });
        await fs.writeFile(
            storageFilePath,
            new Uint8Array(await image.arrayBuffer()),
        );

        resultPath = storageFilePath;
    }

    return resultPath;
}
