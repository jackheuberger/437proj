-- CreateTable
CREATE TABLE "Airport" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Airport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Connection" (
    "id" SERIAL NOT NULL,
    "departureId" INTEGER NOT NULL,
    "arrivalId" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,

    CONSTRAINT "Connection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Airport_code_key" ON "Airport"("code");

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_departureId_fkey" FOREIGN KEY ("departureId") REFERENCES "Airport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_arrivalId_fkey" FOREIGN KEY ("arrivalId") REFERENCES "Airport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
