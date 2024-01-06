/*
  Warnings:

  - You are about to drop the column `userId` on the `app` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `dashboard` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `app` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `dashboard` DROP COLUMN `userId`;
