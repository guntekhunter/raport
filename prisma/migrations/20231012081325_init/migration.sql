/*
  Warnings:

  - Added the required column `alamat_sekolah` to the `main_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desa` to the `main_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kabupaten` to the `main_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kecamatan` to the `main_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_sekolah` to the `main_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `npsn` to the `main_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propinsi` to the `main_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status_sekolah` to the `main_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "main_data" ADD COLUMN     "alamat_sekolah" TEXT NOT NULL,
ADD COLUMN     "desa" TEXT NOT NULL,
ADD COLUMN     "kabupaten" TEXT NOT NULL,
ADD COLUMN     "kecamatan" TEXT NOT NULL,
ADD COLUMN     "nama_sekolah" TEXT NOT NULL,
ADD COLUMN     "npsn" TEXT NOT NULL,
ADD COLUMN     "propinsi" TEXT NOT NULL,
ADD COLUMN     "status_sekolah" TEXT NOT NULL;
