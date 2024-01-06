/*
  Warnings:

  - Made the column `position` on table `contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `branch` on table `contact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `contact` MODIFY `position` VARCHAR(191) NOT NULL,
    MODIFY `branch` VARCHAR(191) NOT NULL;
