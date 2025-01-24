/*
  Warnings:

  - You are about to drop the `Sets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Sets" DROP CONSTRAINT "Sets_legoId_fkey";

-- DropTable
DROP TABLE "Sets";

-- CreateTable
CREATE TABLE "Set" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "theme" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "legoId" TEXT,

    CONSTRAINT "Set_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_legoId_fkey" FOREIGN KEY ("legoId") REFERENCES "Lego"("id") ON DELETE SET NULL ON UPDATE CASCADE;
