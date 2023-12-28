-- AlterTable
ALTER TABLE `task` ADD COLUMN `archived` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `archivedAt` DATETIME(3) NULL;
