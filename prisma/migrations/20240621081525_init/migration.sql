/*
  Warnings:

  - Added the required column `answer` to the `Option` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `option` ADD COLUMN `answer` VARCHAR(191) NOT NULL;
