/*
  Warnings:

  - You are about to drop the column `requiredPermissions` on the `app` table. All the data in the column will be lost.
  - You are about to drop the column `requiredPermissions` on the `dashboard` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `app` DROP COLUMN `requiredPermissions`;

-- AlterTable
ALTER TABLE `dashboard` DROP COLUMN `requiredPermissions`;
