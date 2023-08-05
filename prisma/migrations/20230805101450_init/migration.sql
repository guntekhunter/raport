-- CreateTable
CREATE TABLE "main_data" (
    "id" SERIAL NOT NULL,
    "guru_kelas" TEXT NOT NULL,
    "nip" INTEGER NOT NULL,
    "kelas_huruf" TEXT NOT NULL,
    "kelas_angka" TEXT NOT NULL,
    "semester" TEXT NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "main_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "main_data_nip_key" ON "main_data"("nip");
