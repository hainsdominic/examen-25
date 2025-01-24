-- CreateTable
CREATE TABLE "Lego" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lego_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "theme" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "legoId" TEXT,

    CONSTRAINT "Sets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sets" ADD CONSTRAINT "Sets_legoId_fkey" FOREIGN KEY ("legoId") REFERENCES "Lego"("id") ON DELETE SET NULL ON UPDATE CASCADE;
