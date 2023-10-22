/*
  Warnings:

  - Added the required column `is_active` to the `absen` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "absen" ADD COLUMN     "is_active" BOOLEAN NOT NULL;
