/*
  Warnings:

  - A unique constraint covering the columns `[webPath]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[systemPath]` on the table `Image` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Image_webPath_key" ON "Image"("webPath");

-- CreateIndex
CREATE UNIQUE INDEX "Image_systemPath_key" ON "Image"("systemPath");

-- CreateIndex
CREATE INDEX "Image_id_idx" ON "Image"("id");
