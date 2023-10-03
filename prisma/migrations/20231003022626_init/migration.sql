/*
  Warnings:

  - Added the required column `status` to the `absen` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "absen" ADD COLUMN     "status" TEXT NOT NULL;
