-- DropForeignKey
ALTER TABLE "absen" DROP CONSTRAINT "absen_absens_id_fkey";

-- DropForeignKey
ALTER TABLE "absens" DROP CONSTRAINT "absens_siswa_id_fkey";

-- DropForeignKey
ALTER TABLE "nilai" DROP CONSTRAINT "nilai_id_nilai_fkey";

-- DropForeignKey
ALTER TABLE "nilai_siswa" DROP CONSTRAINT "nilai_siswa_siswa_id_fkey";

-- AddForeignKey
ALTER TABLE "absen" ADD CONSTRAINT "absen_absens_id_fkey" FOREIGN KEY ("absens_id") REFERENCES "absens"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "absens" ADD CONSTRAINT "absens_siswa_id_fkey" FOREIGN KEY ("siswa_id") REFERENCES "students_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nilai_siswa" ADD CONSTRAINT "nilai_siswa_siswa_id_fkey" FOREIGN KEY ("siswa_id") REFERENCES "students_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nilai" ADD CONSTRAINT "nilai_id_nilai_fkey" FOREIGN KEY ("id_nilai") REFERENCES "nilai_siswa"("id") ON DELETE CASCADE ON UPDATE CASCADE;
