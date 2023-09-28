-- CreateTable
CREATE TABLE "date" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "date_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "absen" (
    "id" SERIAL NOT NULL,
    "date_id" INTEGER NOT NULL,
    "siswa_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "absen_pkey" PRIMARY KEY ("id")
);
