-- CreateTable
CREATE TABLE "Warrior" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isEvil" BOOLEAN NOT NULL DEFAULT false,
    "race" TEXT NOT NULL,
    "skill" TEXT,
    "imageUrl" TEXT NOT NULL DEFAULT '/assets/default-warrior.png',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "age" INTEGER,

    CONSTRAINT "Warrior_pkey" PRIMARY KEY ("id")
);
