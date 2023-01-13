-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 13, 2023 at 09:38 PM
-- Server version: 8.0.13
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `creativeguild`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `featured` enum('0','1') COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '1=yes,0=no',
  `date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`id`, `user_id`, `title`, `description`, `image`, `featured`, `date`, `created_at`, `updated_at`) VALUES
(3, 1, 'Nandhaka Pieris', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape1.jpeg', '1', '2015-05-01', '2023-01-14 01:55:33', '2023-01-14 01:55:33'),
(4, 1, 'New West Calgary', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape2.jpeg', '0', '2016-05-01', '2023-01-14 01:55:33', '2023-01-14 01:55:33'),
(5, 1, 'Australian Landscape', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape3.jpeg', '0', '2015-02-02', '2023-01-14 01:55:33', '2023-01-14 01:55:33'),
(6, 1, 'Halvergate Marsh', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape4.jpeg', '1', '2014-04-01', '2023-01-14 01:55:33', '2023-01-14 01:55:33'),
(7, 1, 'Rikkis Landscape', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape5.jpeg', '0', '2010-09-01', '2023-01-14 01:55:33', '2023-01-14 01:55:33'),
(8, 1, 'Kiddi Kristjans Iceland', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape6.jpeg', '1', '2015-07-21', '2023-01-14 01:55:33', '2023-01-14 01:55:33'),
(9, 3, 'Nandhaka Pieris', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape1.jpeg', '1', NULL, '2023-01-14 02:16:22', '2023-01-14 02:16:22'),
(10, 3, 'New West Calgary', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape2.jpeg', '0', NULL, '2023-01-14 02:16:22', '2023-01-14 02:16:22'),
(11, 3, 'Australian Landscape', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape3.jpeg', '0', NULL, '2023-01-14 02:16:22', '2023-01-14 02:16:22'),
(12, 3, 'Halvergate Marsh', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape4.jpeg', '1', NULL, '2023-01-14 02:16:22', '2023-01-14 02:16:22'),
(13, 3, 'Rikkis Landscape', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape5.jpeg', '0', NULL, '2023-01-14 02:16:22', '2023-01-14 02:16:22'),
(14, 3, 'Kiddi Kristjans Iceland', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape6.jpeg', '1', NULL, '2023-01-14 02:16:22', '2023-01-14 02:16:22'),
(15, 4, 'Nandhaka Pieris', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape1.jpeg', '1', NULL, '2023-01-14 02:23:29', '2023-01-14 02:23:29'),
(16, 4, 'New West Calgary', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape2.jpeg', '0', NULL, '2023-01-14 02:23:29', '2023-01-14 02:23:29'),
(17, 4, 'Australian Landscape', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape3.jpeg', '0', NULL, '2023-01-14 02:23:29', '2023-01-14 02:23:29'),
(18, 4, 'Halvergate Marsh', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape4.jpeg', '1', NULL, '2023-01-14 02:23:29', '2023-01-14 02:23:29'),
(19, 4, 'Rikkis Landscape', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape5.jpeg', '0', NULL, '2023-01-14 02:23:29', '2023-01-14 02:23:29'),
(20, 4, 'Kiddi Kristjans Iceland', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'landscape6.jpeg', '1', NULL, '2023-01-14 02:23:29', '2023-01-14 02:23:29');

-- --------------------------------------------------------

--
-- Table structure for table `audits`
--

CREATE TABLE `audits` (
  `id` int(10) UNSIGNED NOT NULL,
  `admin_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `admin_id` bigint(20) UNSIGNED DEFAULT NULL,
  `event` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `auditable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `auditable_id` bigint(20) UNSIGNED NOT NULL,
  `old_values` text COLLATE utf8mb4_unicode_ci,
  `new_values` text COLLATE utf8mb4_unicode_ci,
  `url` text COLLATE utf8mb4_unicode_ci,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tags` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `audits`
--

INSERT INTO `audits` (`id`, `admin_type`, `admin_id`, `event`, `auditable_type`, `auditable_id`, `old_values`, `new_values`, `url`, `ip_address`, `user_agent`, `tags`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL, 'created', 'App\\Models\\Users', 1, '[]', '{\"name\":\"abhishek\",\"phone\":\"6644\",\"bio\":\"aa\",\"email\":\"abhishek@gmail.com\",\"password\":\"$2y$10$YQXF.mVq.LWalD\\/QrU.mHuOPjrN4ZekjuHCtx0evhlvADIsmVyQc.\",\"id\":1}', 'http://localhost:8000/api/register', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-13 02:29:35', '2023-01-13 02:29:35'),
(2, NULL, NULL, 'updated', 'App\\Models\\Users', 1, '{\"password\":\"$2y$10$YQXF.mVq.LWalD\\/QrU.mHuOPjrN4ZekjuHCtx0evhlvADIsmVyQc.\"}', '{\"password\":\"$2y$10$aeCN\\/0Bp9AIma7gaXjTML.AbH5Jctg.BtaPcf2C6OEZzGXHGVvhuy\"}', 'http://creativeguild.test/api/reset-password', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-13 09:07:44', '2023-01-13 09:07:44'),
(3, NULL, NULL, 'updated', 'App\\Models\\Users', 1, '{\"password\":\"$2y$10$aeCN\\/0Bp9AIma7gaXjTML.AbH5Jctg.BtaPcf2C6OEZzGXHGVvhuy\"}', '{\"password\":\"$2y$10$yBDls3euE\\/TfNiiMYcDJCOFoYkLyawQ\\/h2rG70CWQK7\\/6Rg\\/dcvXe\"}', 'http://creativeguild.test/api/reset-password', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-13 09:10:33', '2023-01-13 09:10:33'),
(4, NULL, NULL, 'created', 'App\\Models\\Albums', 1, '[]', '{\"title\":\"ada\",\"description\":\"ad\",\"featured\":\"1\",\"image\":\"1673593327.jpeg\",\"user_id\":1,\"id\":1}', 'http://creativeguild.test/api/album/create', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-13 12:02:07', '2023-01-13 12:02:07'),
(5, NULL, NULL, 'created', 'App\\Models\\Albums', 2, '[]', '{\"title\":\"aa\",\"description\":\"dd\",\"featured\":\"1\",\"image\":\"1673593606.jpeg\",\"user_id\":1,\"id\":2}', 'http://creativeguild.test/api/album/create', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-13 12:06:46', '2023-01-13 12:06:46'),
(6, NULL, NULL, 'created', 'App\\Models\\Albums', 3, '[]', '{\"title\":\"Nandhaka Pieris\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"featured\":\"1\",\"image\":\"1673643333.jpeg\",\"user_id\":1,\"id\":3}', 'http://creativeguild.test/api/album/create', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-14 01:55:33', '2023-01-14 01:55:33'),
(7, NULL, NULL, 'created', 'App\\Models\\Users', 2, '[]', '{\"name\":\"ab\",\"phone\":\"4555\",\"bio\":\"aaa\",\"email\":\"abhishek@gmail.com\",\"password\":\"$2y$10$paOpr3LRyhYBmD6ZgkD.5uw9cIM\\/CQzfqt8XSGbHlyyipIq\\/Hd2M2\",\"id\":2}', 'http://creativeguild.test/api/register', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-14 02:15:23', '2023-01-14 02:15:23'),
(8, NULL, NULL, 'created', 'App\\Models\\Users', 3, '[]', '{\"name\":\"ab\",\"phone\":\"4555\",\"bio\":\"aaa\",\"email\":\"abhishek@gmail.com\",\"password\":\"$2y$10$1fl6pFj\\/N4lud5RHHDzpNOrK5jCnRKD2dDO2e4jeE0B\\/bCVMxnBPe\",\"id\":3}', 'http://creativeguild.test/api/register', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-14 02:16:22', '2023-01-14 02:16:22'),
(9, NULL, NULL, 'created', 'App\\Models\\Albums', 9, '[]', '{\"user_id\":3,\"title\":\"Nandhaka Pieris\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"image\":\"landscape1.jpg\",\"featured\":\"1\",\"id\":9}', 'http://creativeguild.test/api/register', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-14 02:16:22', '2023-01-14 02:16:22'),
(10, NULL, NULL, 'created', 'App\\Models\\Albums', 10, '[]', '{\"user_id\":3,\"title\":\"New West Calgary\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"image\":\"landscape2.jpg\",\"featured\":\"0\",\"id\":10}', 'http://creativeguild.test/api/register', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-14 02:16:22', '2023-01-14 02:16:22'),
(11, NULL, NULL, 'created', 'App\\Models\\Albums', 11, '[]', '{\"user_id\":3,\"title\":\"Australian Landscape\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"image\":\"landscape3.jpg\",\"featured\":\"0\",\"id\":11}', 'http://creativeguild.test/api/register', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-14 02:16:22', '2023-01-14 02:16:22'),
(12, NULL, NULL, 'created', 'App\\Models\\Albums', 12, '[]', '{\"user_id\":3,\"title\":\"Halvergate Marsh\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"image\":\"landscape4.jpg\",\"featured\":\"1\",\"id\":12}', 'http://creativeguild.test/api/register', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-14 02:16:22', '2023-01-14 02:16:22'),
(13, NULL, NULL, 'created', 'App\\Models\\Albums', 13, '[]', '{\"user_id\":3,\"title\":\"Rikkis Landscape\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"image\":\"landscape5.jpg\",\"featured\":\"0\",\"id\":13}', 'http://creativeguild.test/api/register', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-14 02:16:22', '2023-01-14 02:16:22'),
(14, NULL, NULL, 'created', 'App\\Models\\Albums', 14, '[]', '{\"user_id\":3,\"title\":\"Kiddi Kristjans Iceland\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"image\":\"landscape6.jpg\",\"featured\":\"1\",\"id\":14}', 'http://creativeguild.test/api/register', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-14 02:16:22', '2023-01-14 02:16:22'),
(15, NULL, NULL, 'created', 'App\\Models\\Users', 4, '[]', '{\"name\":\"Nick Reynolds\",\"phone\":\"555-555-5555\",\"bio\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\",\"email\":\"nick.reynolds@domain.co\",\"password\":\"$2y$10$mg2ZPhiII\\/5LcP4q4nI6\\/unfqC3nP6X2zs1bPZXmC7Cl\\/Vqqg\\/FkO\",\"id\":4}', 'http://creativeguild.test/api/register', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-14 02:23:29', '2023-01-14 02:23:29'),
(16, NULL, NULL, 'created', 'App\\Models\\Albums', 15, '[]', '{\"user_id\":4,\"title\":\"Nandhaka Pieris\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"image\":\"landscape1.jpeg\",\"featured\":\"1\",\"id\":15}', 'http://creativeguild.test/api/register', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-14 02:23:29', '2023-01-14 02:23:29'),
(17, NULL, NULL, 'created', 'App\\Models\\Albums', 16, '[]', '{\"user_id\":4,\"title\":\"New West Calgary\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"image\":\"landscape2.jpeg\",\"featured\":\"0\",\"id\":16}', 'http://creativeguild.test/api/register', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-14 02:23:29', '2023-01-14 02:23:29'),
(18, NULL, NULL, 'created', 'App\\Models\\Albums', 17, '[]', '{\"user_id\":4,\"title\":\"Australian Landscape\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"image\":\"landscape3.jpeg\",\"featured\":\"0\",\"id\":17}', 'http://creativeguild.test/api/register', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-14 02:23:29', '2023-01-14 02:23:29'),
(19, NULL, NULL, 'created', 'App\\Models\\Albums', 18, '[]', '{\"user_id\":4,\"title\":\"Halvergate Marsh\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"image\":\"landscape4.jpeg\",\"featured\":\"1\",\"id\":18}', 'http://creativeguild.test/api/register', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-14 02:23:29', '2023-01-14 02:23:29'),
(20, NULL, NULL, 'created', 'App\\Models\\Albums', 19, '[]', '{\"user_id\":4,\"title\":\"Rikkis Landscape\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"image\":\"landscape5.jpeg\",\"featured\":\"0\",\"id\":19}', 'http://creativeguild.test/api/register', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-14 02:23:29', '2023-01-14 02:23:29'),
(21, NULL, NULL, 'created', 'App\\Models\\Albums', 20, '[]', '{\"user_id\":4,\"title\":\"Kiddi Kristjans Iceland\",\"description\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"image\":\"landscape6.jpeg\",\"featured\":\"1\",\"id\":20}', 'http://creativeguild.test/api/register', '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0', NULL, '2023-01-14 02:23:29', '2023-01-14 02:23:29');

-- --------------------------------------------------------

--
-- Table structure for table `log_admin_invalid_logins`
--

CREATE TABLE `log_admin_invalid_logins` (
  `log_id` bigint(20) UNSIGNED NOT NULL,
  `log_time` datetime NOT NULL,
  `log_username` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `log_password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `log_module` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `log_ip` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `log_browser` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `log_platform` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `log_agent` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `log_referer` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `log_extra_info` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_resets_table', 1),
(2, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(3, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(4, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(5, '2016_06_01_000004_create_oauth_clients_table', 1),
(6, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(7, '2019_06_16_092909_create_notification_settings_table', 1),
(8, '2019_06_16_100544_create_log_admin_invalid_logins_table', 1),
(9, '2019_06_23_060429_create_notifications_table', 1),
(10, '2019_07_08_071237_create_audits_table', 1),
(11, '2019_07_20_093030_create_users_table', 1),
(12, '2019_09_15_061909_create_sessions_table', 1),
(14, '2023_01_13_060522_create_albums_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint(20) UNSIGNED NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notification_settings`
--

CREATE TABLE `notification_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `view` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default',
  `subject` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_body` longtext COLLATE utf8mb4_unicode_ci,
  `sms_body` longtext COLLATE utf8mb4_unicode_ci,
  `database_body` longtext COLLATE utf8mb4_unicode_ci,
  `notification_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` enum('1','2') COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '1=active,2=inactive',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notification_settings`
--

INSERT INTO `notification_settings` (`id`, `title`, `code`, `view`, `subject`, `email_body`, `sms_body`, `database_body`, `notification_type`, `active`, `created_at`, `updated_at`) VALUES
(1, 'Forget Password', 'forget-password', 'default', 'Forget password?', '<td align=\"center\" class=\"sm-px-24\" style=\"font-family: \'Montserrat\',Arial,sans-serif;\">\r\n                                <table style=\"font-family: \'Montserrat\',Arial,sans-serif; width: 100%;\" width=\"100%\"\r\n                                    cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\">\r\n                                    <tr>\r\n                                        <td class=\"sm-px-24\"\r\n                                            style=\"--bg-opacity: 1; background-color: #ffffff; background-color: rgba(255, 255, 255, var(--bg-opacity)); border-radius: 4px; font-family: Montserrat, -apple-system, \'Segoe UI\', sans-serif; font-size: 14px; line-height: 24px; padding: 48px; text-align: left; --text-opacity: 1; color: #626262; color: rgba(98, 98, 98, var(--text-opacity));\"\r\n                                            bgcolor=\"rgba(255, 255, 255, var(--bg-opacity))\" align=\"left\">\r\n                                            <div style=\"width: 250px; text-align: center; margin: 0 auto;\">\r\n                                                <img style=\"height: 75px; text-align: center;\"\r\n                                                    src=\"https://imgur.com/wFPCTVQ\" alt=\"logo\" class=\"logo\">\r\n\r\n                                            </div>\r\n                                            <h3 style=\"text-align: center;\">Forget Your Password?</h3>\r\n                                            <p style=\"margin: 0 0 24px; text-align: center;\">\r\n                                                If you request to reset your password,<br>\r\n                                                Please continue with the code below\r\n                                            </p>\r\n                                            <h3 style=\"text-align: center;\">[CODE]</h3>\r\n                                            <table\r\n                                                style=\" padding-left: 30%; font-family: \'Montserrat\',Arial,sans-serif;\"\r\n                                                cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\">\r\n                                                <tr>\r\n                                                    <td style=\"mso-padding-alt: 16px 24px; --bg-opacity: 1; background-color: #ff5722; border-radius: 4px; font-family: Montserrat, -apple-system, \'Segoe UI\', sans-serif;\" \">\r\n                                                    <a href=\"[LINK]\"\r\n                                                        style=\"display: block; font-weight: 600; font-size: 14px; line-height: 100%; padding: 16px 24px; --text-opacity: 1; color: #ffffff;  text-decoration: none;\">\r\n                                                        Reset Password </a>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </table><br>\r\n                                            <p style=\"margin: 0 0 24px; text-align: center;\">\r\n                                                This link will expire in 24h.\r\n                                            </p>\r\n\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td style=\"font-family: \'Montserrat\',Arial,sans-serif; height: 16px;\"\r\n                                            height=\"16\"></td>\r\n                                    </tr>\r\n                                </table>\r\n                            </td>', NULL, NULL, '[\"mail\"]', '1', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('08a92ae72a756a11b5774e70ee4c729c7e5d22a8745efc25fd2d9dbc20f1a77c8b1fd075ca625d3d', 1, 1, 'Personal Access Token', '[]', 1, '2023-01-13 09:07:50', '2023-01-13 09:07:50', '2024-01-13 04:07:50'),
('549d55375dd7aaa7ad15369ca6bc5043d478c43a190c718da67666be18dbdc3bbe1ada4e5681f071', 1, 1, 'Personal Access Token', '[]', 1, '2023-01-14 01:52:44', '2023-01-14 01:52:44', '2024-01-13 20:52:44'),
('5678db8de96bdf72b2447bea014b5f8d846a76c5e2b1f13cdf74bef171644ee49d59390da544b263', 1, 1, 'Personal Access Token', '[]', 1, '2023-01-13 09:13:20', '2023-01-13 09:13:20', '2024-01-13 04:13:20'),
('796e46b23471e202c3e251f4afbfd9be0614c800d4f511da566735d116cf76548ab38e9eedad8e4a', 3, 1, 'Personal Access Token', '[]', 1, '2023-01-14 02:16:37', '2023-01-14 02:16:37', '2024-01-13 21:16:37'),
('f220983586b65097975a24add8f32f161fc5b6dfdf2ff1fdce0d0cf81f2a5d5ba235aed416dcf7b3', 1, 1, 'Personal Access Token', '[]', 1, '2023-01-13 02:29:56', '2023-01-13 02:29:56', '2024-01-12 21:29:56'),
('fb5f3d24acaa636aa66ae1827ac3f2186dc1cdf92d655de5f981d9726162476583ccfc48cc2f9ea0', 4, 1, 'Personal Access Token', '[]', 0, '2023-01-14 02:23:39', '2023-01-14 02:23:39', '2024-01-13 21:23:39');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'N4QLsOjBE5b4cLXvc2EWLejKkhLBFAfsAoSjnf96', NULL, 'http://localhost', 1, 0, 0, '2023-01-13 02:22:14', '2023-01-13 02:22:14'),
(2, NULL, 'Laravel Password Grant Client', 'UClRNEBijKge8WYDbKwBxjt7jdgpHsfXM0FpvY6L', 'users', 'http://localhost', 0, 1, 0, '2023-01-13 02:22:14', '2023-01-13 02:22:14');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2023-01-13 02:22:14', '2023-01-13 02:22:14');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activation_code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activation_date` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bio` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `activation_code`, `activation_date`, `bio`, `image`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'abhishek', 'abhishekgiri49.ag@gmail.com', '$2y$10$yBDls3euE/TfNiiMYcDJCOFoYkLyawQ/h2rG70CWQK7/6Rg/dcvXe', '6644', '678612', '2023-01-13 20:52:09', 'aa', NULL, NULL, '2023-01-13 02:29:35', '2023-01-13 09:10:33'),
(3, 'ab', 'abhishek@gmail.com', '$2y$10$1fl6pFj/N4lud5RHHDzpNOrK5jCnRKD2dDO2e4jeE0B/bCVMxnBPe', '4555', NULL, NULL, 'aaa', NULL, NULL, '2023-01-14 02:16:22', '2023-01-14 02:16:22'),
(4, 'Nick Reynolds', 'nick.reynolds@domain.co', '$2y$10$mg2ZPhiII/5LcP4q4nI6/unfqC3nP6X2zs1bPZXmC7Cl/Vqqg/FkO', '555-555-5555', NULL, NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', NULL, NULL, '2023-01-14 02:23:29', '2023-01-14 02:23:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`),
  ADD KEY `albums_user_id_foreign` (`user_id`);

--
-- Indexes for table `audits`
--
ALTER TABLE `audits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `audits_auditable_type_auditable_id_index` (`auditable_type`,`auditable_id`),
  ADD KEY `audits_admin_id_admin_type_index` (`admin_id`,`admin_type`);

--
-- Indexes for table `log_admin_invalid_logins`
--
ALTER TABLE `log_admin_invalid_logins`
  ADD PRIMARY KEY (`log_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`);

--
-- Indexes for table `notification_settings`
--
ALTER TABLE `notification_settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `notification_settings_code_unique` (`code`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD UNIQUE KEY `sessions_id_unique` (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `audits`
--
ALTER TABLE `audits`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `log_admin_invalid_logins`
--
ALTER TABLE `log_admin_invalid_logins`
  MODIFY `log_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `notification_settings`
--
ALTER TABLE `notification_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `albums_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
