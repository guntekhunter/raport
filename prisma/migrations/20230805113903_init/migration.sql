/*
  Warnings:

  - Added the required column `updatedAt` to the `main_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "main_data" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "main_data" ADD CONSTRAINT "main_data_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
