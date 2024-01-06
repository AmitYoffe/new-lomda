/*
  Warnings:

  - You are about to drop the column `birthday` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `app` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `appclick` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `contact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dashboard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dashboardclick` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `appclick` DROP FOREIGN KEY `AppClick_appId_fkey`;

-- DropForeignKey
ALTER TABLE `appclick` DROP FOREIGN KEY `AppClick_userId_fkey`;

-- DropForeignKey
ALTER TABLE `contact` DROP FOREIGN KEY `createdBy`;

-- DropForeignKey
ALTER TABLE `contact` DROP FOREIGN KEY `updatedBy`;

-- DropForeignKey
ALTER TABLE `dashboardclick` DROP FOREIGN KEY `DashboardClick_dashboardId_fkey`;

-- DropForeignKey
ALTER TABLE `dashboardclick` DROP FOREIGN KEY `DashboardClick_userId_fkey`;

-- DropIndex
DROP INDEX `User_name_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `birthday`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `password`,
    DROP COLUMN `phoneNumber`,
    DROP COLUMN `role`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `app`;

-- DropTable
DROP TABLE `appclick`;

-- DropTable
DROP TABLE `contact`;

-- DropTable
DROP TABLE `dashboard`;

-- DropTable
DROP TABLE `dashboardclick`;

-- CreateTable
CREATE TABLE `Question` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `text` VARCHAR(191) NOT NULL,
    `lessonId` INTEGER NOT NULL,
    `lastEditDate` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lesson` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `topicId` INTEGER NOT NULL,
    `lastEditDate` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Topic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `lastEditDate` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lesson`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesson` ADD CONSTRAINT `Lesson_topicId_fkey` FOREIGN KEY (`topicId`) REFERENCES `Topic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
