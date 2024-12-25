-- CreateTable
CREATE TABLE "Settlement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "colony" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    CONSTRAINT "Settlement_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT
);

-- CreateTable
CREATE TABLE "Map" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orientation" INTEGER NOT NULL,
    "turn" INTEGER NOT NULL,
    "settlementId" TEXT NOT NULL,
    CONSTRAINT "Map_settlementId_fkey" FOREIGN KEY ("settlementId") REFERENCES "Settlement" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Hex" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "position" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "data" INTEGER NOT NULL,
    "mapId" TEXT NOT NULL,
    CONSTRAINT "Hex_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "Map" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Settlement_accountId_key" ON "Settlement"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Settlement_name_colony_key" ON "Settlement"("name", "colony");

-- CreateIndex
CREATE UNIQUE INDEX "Map_settlementId_key" ON "Map"("settlementId");

-- CreateIndex
CREATE UNIQUE INDEX "Hex_mapId_key" ON "Hex"("mapId");
