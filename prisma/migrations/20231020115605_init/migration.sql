/*
  Warnings:

  - Added the required column `kepala_sekolah` to the `main_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nip_kepsek` to the `main_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tahun_ajaran` to the `main_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "main_data" ADD COLUMN     "kepala_sekolah" TEXT NOT NULL,
ADD COLUMN     "nip_kepsek" INTEGER NOT NULL,
ADD COLUMN     "tahun_ajaran" TEXT NOT NULL;
