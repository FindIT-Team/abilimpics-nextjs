"use server";

export async function isImageUnique(webPath: string) {
    return !(await prisma.image.findUnique({ where: { webPath } }))
        ? { success: true, errors: {} }
        : {
              success: false,
              errors: { image: ["Image already exists"] },
          };
}
