-- AlterTable
ALTER TABLE "File" ADD COLUMN     "competenceId" TEXT;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_competenceId_fkey" FOREIGN KEY ("competenceId") REFERENCES "Competence"("id") ON DELETE SET NULL ON UPDATE CASCADE;
