/*
  Warnings:

  - Added the required column `mounth` to the `date` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "date" ADD COLUMN     "mounth" TEXT NOT NULL;
