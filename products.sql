-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2025 at 08:40 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `products`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `_id` int(50) NOT NULL,
  `name` varchar(60) NOT NULL,
  `price` decimal(40,0) NOT NULL,
  `image` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`_id`, `name`, `price`, `image`) VALUES
(1, 'Asus Laptop Price in Bangladesh 2025', 100, 'https://i.ibb.co.com/FqrRW4d/lap1.jpg'),
(2, 'Asus Laptop Price In Bangladesh', 200, 'https://i.ibb.co.com/bPTW6V6/lap3.jpg'),
(3, 'Lenovo ThinkPad Price in BD', 145, 'https://i.ibb.co.com/zQfsBp4/lap2.jpg'),
(4, 'Samsung Galaxy Book3 Price in BD', 200, 'https://i.ibb.co.com/kDRFsc0/lop4.webp'),
(5, 'Buy Mens Shoes Online in Bangladesh', 500, 'https://i.ibb.co.com/0fpvGkx/p1.jpg'),
(6, 'Buy Mens Shoes Online in Bangladesh', 800, 'https://i.ibb.co.com/hYrbZzR/p8.jpg'),
(7, 'Buy Casual Shoes Online in BD', 700, 'https://i.ibb.co.com/3p7rjJR/p2.jpg'),
(8, 'Several Shoes Images - Free Download on Freepik', 900, 'https://i.ibb.co.com/9Y0pXr5/p3.jpg'),
(9, 'Buy Mens t-shirt Online in Bangladesh', 500, 'https://i.ibb.co.com/bsR6gz7/p4.jpg'),
(10, 'Womens t-shirt Online in Bangladesh', 400, 'https://i.ibb.co.com/9GSRkLy/p5.jpg'),
(11, 'Buy Makeup Products Online at Best Price in Bangladesh', 900, 'https://i.ibb.co.com/hVFFnDb/p6.jpg'),
(12, 'Multi Colour Bottle', 300, 'https://i.ibb.co.com/6bzYZdZ/p7.jpg'),
(13, 'Coconut oil bottle', 450, 'https://i.ibb.co.com/hYrbZzR/p8.jpg'),
(14, 'girls makeup products nelpolisse', 700, 'https://i.ibb.co.com/yg2wvGY/p9.jpg'),
(15, 'Women cream products', 200, 'https://i.ibb.co.com/F03vD9r/p10.jpg'),
(16, 'Women products', 300, 'https://i.ibb.co.com/F03vD9r/p10.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`id`, `name`, `email`, `password`) VALUES
(1, 'Rajib', 'rajib1@gmail.com', '$2b$10$itNYV.G8ewve.YjDPUZ/Wey4oZJIIbyUlQgSse6Ncjs8qNiVAHZjm'),
(2, 'Tusher', 'tusher@gmail.com', '$2b$10$QAqxFPncO7HWNk3HWgeGTuVlhcbfplf3APPFASberzFC2X9/nEDQW'),
(3, 'Shakil Ahmed', 'sakil@gmail.com', '$2b$10$G/ACDF4LYPekmm9r3gl.4.oUM5ZU5DjldPmClKbuujnHM8ceeUgtW'),
(4, 'Gari awla 2', 'gari@gmail.com', '$2b$10$jG8xw8xHZirFr.V01SzotekWnoEHKm/2Koa0s0oRtGFtxeTNe4lbe'),
(5, 'Aminul', 'aminul@gmail.com', '$2b$10$sWgjywj0ZLBR3sUiDp2lI.mZEKErAx7BqayLSvZjj3.Ap12wahJXG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
