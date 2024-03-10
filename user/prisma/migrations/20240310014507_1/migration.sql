-- CreateTable
CREATE TABLE `siswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `nomorUjian` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `nisNisn` VARCHAR(191) NOT NULL,
    `sesiUjian` VARCHAR(191) NOT NULL,
    `ruangUjian` VARCHAR(191) NOT NULL,
    `kodeLevel` VARCHAR(191) NOT NULL,
    `kodeKelas` VARCHAR(191) NOT NULL,
    `jenisKelamin` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `jurusan` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NOT NULL,
    `agama` VARCHAR(191) NOT NULL,
    `pilihan` VARCHAR(191) NOT NULL,
    `kodeSekolah` VARCHAR(191) NOT NULL,
    `namaKelas` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `siswa_nisNisn_key`(`nisNisn`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
