/*
  Warnings:

  - Added the required column `nisn` to the `students_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "students_data" ADD COLUMN     "nisn" TEXT NOT NULL;
