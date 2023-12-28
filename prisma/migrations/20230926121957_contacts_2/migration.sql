/*
  Warnings:

  - You are about to drop the column `birthdate` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `phonenumber` on the `contact` table. All the data in the column will be lost.
  - Added the required column `birthDate` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `contact` DROP FOREIGN KEY `Contact_userId_fkey`;

-- AlterTable
ALTER TABLE `contact` DROP COLUMN `birthdate`,
    DROP COLUMN `phonenumber`,
    ADD COLUMN `birthDate` DATETIME(3) NOT NULL,
    ADD COLUMN `phoneNumber` INTEGER NOT NULL,
    MODIFY `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Contact` ADD CONSTRAINT `Contact_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
