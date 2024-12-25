-- CreateTable
CREATE TABLE "LinkVisit" (
    "id" TEXT NOT NULL,
    "linkId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LinkVisit_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LinkVisit" ADD CONSTRAINT "LinkVisit_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
