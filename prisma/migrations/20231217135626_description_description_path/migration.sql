/*
  Warnings:

  - You are about to drop the column `description` on the `app` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `dashboard` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `app` DROP COLUMN `description`,
    ADD COLUMN `descriptionPath` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `dashboard` DROP COLUMN `description`,
    ADD COLUMN `descriptionPath` VARCHAR(191) NULL;
