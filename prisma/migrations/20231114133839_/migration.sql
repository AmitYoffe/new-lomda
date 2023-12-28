/*
  Warnings:

  - You are about to drop the `task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `task` DROP FOREIGN KEY `Task_userId_fkey`;

-- DropTable
DROP TABLE `task`;

-- CreateTable
CREATE TABLE `App` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `appLinkUrl` VARCHAR(191) NOT NULL,
    `defaultImagePath` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `requiredPermissions` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dashboard` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `dashboardLinkUrl` VARCHAR(191) NOT NULL,
    `defaultImagePath` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `requiredPermissions` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AppClick` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clickCount` INTEGER NOT NULL DEFAULT 0,
    `userId` INTEGER NULL,
    `appId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DashboardClick` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clickCount` INTEGER NOT NULL DEFAULT 0,
    `userId` INTEGER NULL,
    `dashboardId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AppClick` ADD CONSTRAINT `AppClick_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AppClick` ADD CONSTRAINT `AppClick_appId_fkey` FOREIGN KEY (`appId`) REFERENCES `App`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DashboardClick` ADD CONSTRAINT `DashboardClick_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DashboardClick` ADD CONSTRAINT `DashboardClick_dashboardId_fkey` FOREIGN KEY (`dashboardId`) REFERENCES `Dashboard`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
