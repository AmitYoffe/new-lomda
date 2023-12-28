/*
  Warnings:

  - You are about to drop the column `base` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `contact` table. All the data in the column will be lost.
  - Added the required column `branch` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
-- Change column name from `base` to `branch`
ALTER TABLE `contact` CHANGE COLUMN `base` `branch` VARCHAR(255);

-- Change column name from `role` to `position`
ALTER TABLE `contact` CHANGE COLUMN `role` `position` VARCHAR(255);
