/*
  Warnings:

  - Added the required column `base` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `contact` ADD COLUMN `base` VARCHAR(191) NOT NULL,
    ADD COLUMN `unit` VARCHAR(191) NOT NULL;
