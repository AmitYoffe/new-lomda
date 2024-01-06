/*
  Warnings:

  - You are about to drop the column `userId` on the `contact` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `contact` DROP FOREIGN KEY `updatedBy`;

-- AlterTable
ALTER TABLE `contact` DROP COLUMN `userId`,
    ADD COLUMN `creatingUserId` INTEGER NULL,
    ADD COLUMN `updatingUserId` INTEGER NULL,
    MODIFY `unit` ENUM('mnz', 'matak_gaza', 'tapash', 'matak_jenin', 'matak_efraim', 'matak_nablus', 'matak_ramallah', 'matak_jericho', 'matak_jerusalem', 'matak_bethlehem', 'matak_hebron') NOT NULL;

-- AddForeignKey
ALTER TABLE `Contact` ADD CONSTRAINT `updatedBy` FOREIGN KEY (`creatingUserId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contact` ADD CONSTRAINT `createdBy` FOREIGN KEY (`updatingUserId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
