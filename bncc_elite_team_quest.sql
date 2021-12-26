-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 26, 2021 at 04:59 PM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bncc_elite_team_quest`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `namaLengkap` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pesan` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `namaLengkap`, `email`, `pesan`, `createdAt`, `updatedAt`) VALUES
(1, 'Dwiki Givan Wagey', 'dwiki@gmail.com', 'Selamat siang, saya mau nanya berapa lama kira2 jika saya memakai jasa pembuatan apps?', '2021-12-26 16:58:28', '2021-12-26 16:58:28'),
(2, 'Agustina Azalia', 'agustina@gmail.com', 'Halo admin, saya ingin bertanya mengenai pembayaran, apakah anda bisa menjelaskannya?', '2021-12-26 16:58:28', '2021-12-26 16:58:28'),
(3, 'Fiani Berty Santi', 'fiani@gmail.com', 'Halo admin, saya ingin berkonsultasi mengenai product branding yang mimin sediakan', '2021-12-26 16:58:28', '2021-12-26 16:58:28'),
(4, 'Andhicha Farizi Hasan', 'andhicha@gmail.com', 'Halo min, apakah mimin punya trainer untuk mengajar karyawan untuk membangun bisnis saya?', '2021-12-26 16:58:28', '2021-12-26 16:58:28'),
(5, 'Annieza Puspitasari', 'annieza@gmail.com', 'Halo admin, jika saya membangun aplikasi, apakah hostingnya sudah diatur juga? Terima kasih', '2021-12-26 16:58:28', '2021-12-26 16:58:28');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20211218172133-create-user.js'),
('20211224172422-create-testimoni.js'),
('20211225095833-create-contact.js');

-- --------------------------------------------------------

--
-- Table structure for table `testimoni`
--

CREATE TABLE `testimoni` (
  `id` int(11) NOT NULL,
  `quote` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `testimoni`
--

INSERT INTO `testimoni` (`id`, `quote`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'Gokil banget sih ini, website gue langsung peringkat 1 google pake SEO Agency dari RuApps', 2, '2021-12-26 16:58:28', '2021-12-26 16:58:28'),
(2, 'Keren banget sekarang bisnis saya sudah mempunyai website, Terima kasih RuApps, mantapp pokoknya', 3, '2021-12-26 16:58:28', '2021-12-26 16:58:28'),
(3, 'Mantapp nih RuApps, biayanya terjangkau dan hasilnya memuaskan, semoga bisnis saya bisa lebih maju', 4, '2021-12-26 16:58:28', '2021-12-26 16:58:28');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `namaLengkap` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('Admin','Member') NOT NULL DEFAULT 'Member',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `namaLengkap`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Muhamad Ndaru', 'ndaru@gmail.com', '$2b$10$Vnp1T9vOE4mx7GowMwq05eSRtjMqugSoIV.ICy4bS5PDJt3YfY9AK', 'Admin', '2021-12-26 16:58:27', '2021-12-26 16:58:27'),
(2, 'Aprian Tanuwijaya', 'aprian@gmail.com', '$2b$10$XQ4jjeM3m7Pin.EIzxgzdOk2kWMdCErnKMirUBizIRT0o4RDf3Vgu', 'Member', '2021-12-26 16:58:28', '2021-12-26 16:58:28'),
(3, 'Diandra Raselina', 'diandra@gmail.com', '$2b$10$2n.4u8sgUYo5ulPAfHr7NedWcRkDBL8cgMmpvWuXZQLdunTFaUrEW', 'Member', '2021-12-26 16:58:28', '2021-12-26 16:58:28'),
(4, 'Reynaldi Noordien', 'reynaldi@gmail.com', '$2b$10$Ss.zuBOwc63/2V1zuuCaOOg1TxB5GYw67zySj/tls.z1PnAeTTVJ6', 'Member', '2021-12-26 16:58:28', '2021-12-26 16:58:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `testimoni`
--
ALTER TABLE `testimoni`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `testimoni`
--
ALTER TABLE `testimoni`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
