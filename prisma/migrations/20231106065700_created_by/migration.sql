-- DropForeignKey
ALTER TABLE `contact` DROP FOREIGN KEY `Contact_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Contact` ADD CONSTRAINT `updatedBy` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
