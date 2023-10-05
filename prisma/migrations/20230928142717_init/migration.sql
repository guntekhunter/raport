/*
  Warnings:

  - Added the required column `mata_pelajaran` to the `absen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mounth` to the `absen` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mata_pelajaran` to the `date` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "absen" ADD COLUMN     "mata_pelajaran" TEXT NOT NULL,
ADD COLUMN     "mounth" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "date" ADD COLUMN     "mata_pelajaran" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "absen" ADD CONSTRAINT "absen_date_id_fkey" FOREIGN KEY ("date_id") REFERENCES "date"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "absen" ADD CONSTRAINT "absen_siswa_id_fkey" FOREIGN KEY ("siswa_id") REFERENCES "students_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "absen" ADD CONSTRAINT "absen_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
