-- CreateTable
CREATE TABLE "nilai_siswa" (
    "id" SERIAL NOT NULL,
    "siswa_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "nilai_siswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kd" (
    "id" SERIAL NOT NULL,
    "nilai_type" TEXT NOT NULL,
    "mapel" TEXT NOT NULL,
    "no_kd" TEXT NOT NULL,
    "ket_kd" TEXT NOT NULL,
    "siswa_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nilai" (
    "id" SERIAL NOT NULL,
    "id_nilai" INTEGER NOT NULL,
    "nilai_type" TEXT NOT NULL,
    "mapel" TEXT NOT NULL,
    "id_kd" INTEGER NOT NULL,
    "nilai" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "nilai_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "nilai_siswa" ADD CONSTRAINT "nilai_siswa_siswa_id_fkey" FOREIGN KEY ("siswa_id") REFERENCES "students_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nilai_siswa" ADD CONSTRAINT "nilai_siswa_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kd" ADD CONSTRAINT "kd_siswa_id_fkey" FOREIGN KEY ("siswa_id") REFERENCES "students_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kd" ADD CONSTRAINT "kd_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nilai" ADD CONSTRAINT "nilai_id_nilai_fkey" FOREIGN KEY ("id_nilai") REFERENCES "nilai_siswa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nilai" ADD CONSTRAINT "nilai_id_kd_fkey" FOREIGN KEY ("id_kd") REFERENCES "kd"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
