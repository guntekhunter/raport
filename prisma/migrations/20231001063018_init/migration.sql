-- AddForeignKey
ALTER TABLE "absens" ADD CONSTRAINT "absens_siswa_id_fkey" FOREIGN KEY ("siswa_id") REFERENCES "students_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "absens" ADD CONSTRAINT "absens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
