/*
  Warnings:

  - Changed the type of `nomor_ijasah` on the `students_data` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "students_data" ALTER COLUMN "tahun_pelajaran" SET DATA TYPE TEXT,
DROP COLUMN "nomor_ijasah",
ADD COLUMN     "nomor_ijasah" INTEGER NOT NULL;
