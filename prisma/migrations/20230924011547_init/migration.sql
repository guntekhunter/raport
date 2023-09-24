/*
  Warnings:

  - You are about to drop the column `tahu_lahir_ayah` on the `students_data` table. All the data in the column will be lost.
  - Added the required column `tahun_lahir_ayah` to the `students_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "students_data" DROP COLUMN "tahu_lahir_ayah",
ADD COLUMN     "tahun_lahir_ayah" INTEGER NOT NULL;
