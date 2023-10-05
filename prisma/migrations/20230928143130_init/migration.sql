-- AddForeignKey
ALTER TABLE "date" ADD CONSTRAINT "date_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
