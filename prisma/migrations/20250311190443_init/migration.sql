-- CreateTable
CREATE TABLE "Admin" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "adminID" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "location" TEXT NOT NULL,
    "images" TEXT[],
    "description" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "statusID" TEXT NOT NULL,
    "typeID" TEXT NOT NULL,
    "listingTypeID" TEXT NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "facebookGroup" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyStatus" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "PropertyStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyType" (
    "id" TEXT NOT NULL,
    "typeName" TEXT NOT NULL,

    CONSTRAINT "PropertyType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListingType" (
    "id" TEXT NOT NULL,
    "typeName" TEXT NOT NULL,

    CONSTRAINT "ListingType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyStatus_status_key" ON "PropertyStatus"("status");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyType_typeName_key" ON "PropertyType"("typeName");

-- CreateIndex
CREATE UNIQUE INDEX "ListingType_typeName_key" ON "ListingType"("typeName");

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_adminID_fkey" FOREIGN KEY ("adminID") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_statusID_fkey" FOREIGN KEY ("statusID") REFERENCES "PropertyStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_typeID_fkey" FOREIGN KEY ("typeID") REFERENCES "PropertyType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_listingTypeID_fkey" FOREIGN KEY ("listingTypeID") REFERENCES "ListingType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
