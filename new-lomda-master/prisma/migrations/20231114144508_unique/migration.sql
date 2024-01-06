/*
  Warnings:

  - A unique constraint covering the columns `[userId,appId]` on the table `AppClick` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,dashboardId]` on the table `DashboardClick` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `appclick` MODIFY `clickCount` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `dashboardclick` MODIFY `clickCount` INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX `AppClick_userId_appId_key` ON `AppClick`(`userId`, `appId`);

-- CreateIndex
CREATE UNIQUE INDEX `DashboardClick_userId_dashboardId_key` ON `DashboardClick`(`userId`, `dashboardId`);
