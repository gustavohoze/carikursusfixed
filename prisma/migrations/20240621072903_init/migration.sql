/*
  Warnings:

  - You are about to drop the column `content` on the `post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[namaLengkap]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `subject` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `namaLengkap` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `post` DROP COLUMN `content`,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `subject` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `namaLengkap` VARCHAR(191) NOT NULL,
    ADD COLUMN `role` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Content` (
    `id` VARCHAR(191) NOT NULL,
    `index` INTEGER NOT NULL,
    `image` VARCHAR(191) NULL,
    `question` VARCHAR(191) NOT NULL,
    `postId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Option` (
    `id` VARCHAR(191) NOT NULL,
    `first` VARCHAR(191) NULL,
    `second` VARCHAR(191) NULL,
    `third` VARCHAR(191) NULL,
    `fourth` VARCHAR(191) NULL,
    `contentId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_namaLengkap_key` ON `User`(`namaLengkap`);

-- AddForeignKey
ALTER TABLE `Content` ADD CONSTRAINT `Content_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Option` ADD CONSTRAINT `Option_contentId_fkey` FOREIGN KEY (`contentId`) REFERENCES `Content`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
