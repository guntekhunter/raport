/*
  Warnings:

  - You are about to drop the column `mata_pelajaran` on the `absen` table. All the data in the column will be lost.
  - You are about to drop the column `siswa_id` on the `absen` table. All the data in the column will be lost.
  - Added the required column `absens_id` to the `absen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `absen` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "absen" DROP CONSTRAINT "absen_siswa_id_fkey";

-- AlterTable
ALTER TABLE "absen" DROP COLUMN "mata_pelajaran",
DROP COLUMN "siswa_id",
ADD COLUMN     "absens_id" INTEGER NOT NULL,
ADD COLUMN     "subject" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "absens" (
    "id" SERIAL NOT NULL,
    "siswa_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "absens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "absen" ADD CONSTRAINT "absen_absens_id_fkey" FOREIGN KEY ("absens_id") REFERENCES "absens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
