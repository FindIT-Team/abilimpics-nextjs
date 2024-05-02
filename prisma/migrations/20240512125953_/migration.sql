/*
  Warnings:

  - A unique constraint covering the columns `[previewImageId]` on the table `News` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `previewImageId` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "News" ADD COLUMN     "previewImageId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "News_previewImageId_key" ON "News"("previewImageId");

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_previewImageId_fkey" FOREIGN KEY ("previewImageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
