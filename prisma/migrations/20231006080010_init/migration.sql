/*
  Warnings:

  - You are about to drop the column `siswa_id` on the `kd` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "kd" DROP CONSTRAINT "kd_siswa_id_fkey";

-- AlterTable
ALTER TABLE "kd" DROP COLUMN "siswa_id",
ADD COLUMN     "students_dataId" INTEGER;

-- AddForeignKey
ALTER TABLE "kd" ADD CONSTRAINT "kd_students_dataId_fkey" FOREIGN KEY ("students_dataId") REFERENCES "students_data"("id") ON DELETE SET NULL ON UPDATE CASCADE;
