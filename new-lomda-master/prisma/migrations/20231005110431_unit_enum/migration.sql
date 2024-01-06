/*
  Warnings:

  - You are about to alter the column `unit` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `contact` MODIFY `unit` ENUM('mnz', 'matak_gaza', 'tapash') NOT NULL;
