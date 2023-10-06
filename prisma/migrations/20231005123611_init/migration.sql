/*
  Warnings:

  - Added the required column `user_id` to the `nilai` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "nilai" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "nilai" ADD CONSTRAINT "nilai_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;