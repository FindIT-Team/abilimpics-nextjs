import child_process from "child_process";
import fs from "fs/promises";

export async function saveImage(
  image: Blob,
  {
    entity,
    slug,
    name,
  }: {
    entity: string;
    slug: string;
    name: string;
  },
) {
  if (!image.type.startsWith("image")) return;

  const path = `${entity}/${slug}`;
  const buildPath = `build/client/${path}`;
  const storagePath = `public/${path}`;
  const cachePath = `.cache/${path}`;

  await deleteImage({ entity, slug, name });

  if (image.type !== "image/svg+xml") {
    const cacheFilePath = `${cachePath}/${name}`;
    const storageFilePath = `${storagePath}/${name}.webp`;
    const buildFilePath = `${buildPath}/${name}.webp`;

    await fs.mkdir(cachePath, { recursive: true });
    await fs.writeFile(
      cacheFilePath,
      new Uint8Array(await image.arrayBuffer()),
    );

    const cmd = `cwebp -lossless -exact -q 100 ${cacheFilePath} -o ${storageFilePath}`;
    child_process.execSync(cmd, { encoding: "utf-8" });
    await fs.copyFile(storageFilePath, buildFilePath);

    await fs.rm(cacheFilePath);
  } else {
    const storageFilePath = `${storagePath}/${name}.svg`;
    const buildFilePath = `${buildPath}/${name}.svg`;

    await fs.writeFile(
      storageFilePath,
      new Uint8Array(await image.arrayBuffer()),
    );
    await fs.copyFile(storageFilePath, buildFilePath);
  }
  return `/${
    process.env.NODE_ENV === "production" ? "" : "public/"
  }${path}/${name}.${image.type === "image/svg+xml" ? "svg" : "webp"}`;
}

export async function deleteImage({
  entity,
  slug,
  name,
}: {
  entity: string;
  slug: string;
  name: string;
}) {
  const path = `${entity}/${slug}`;
  const buildPath = `build/client/${path}`;
  const storagePath = `public/${path}`;

  await fs.mkdir(storagePath, { recursive: true });
  await fs.mkdir(buildPath, { recursive: true });
  for (const file of await fs.readdir(storagePath))
    if (file.slice(0, file.lastIndexOf(".")) === name)
      await fs.rm(`${storagePath}/${file}`);
  for (const file of await fs.readdir(buildPath))
    if (file.slice(0, file.lastIndexOf(".")) === name)
      await fs.rm(`${buildPath}/${file}`);
}
