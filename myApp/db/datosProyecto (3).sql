-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 23-06-2022 a las 01:33:00
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `datosProyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `comentario` text,
  `products_id` int(11) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comments`
--

INSERT INTO `comments` (`id`, `comentario`, `products_id`, `users_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(38, 'Alguien sabe el precio?', 55, 24, '2022-06-21 23:40:49', '2022-06-21 23:40:49', NULL),
(39, 'Estas no me gustan', 57, 24, '2022-06-21 23:40:59', '2022-06-21 23:40:59', NULL),
(40, 'Buenisimas', 59, 24, '2022-06-21 23:41:09', '2022-06-21 23:41:09', NULL),
(41, 'Estas son mis favoritas', 60, 21, '2022-06-21 23:41:21', '2022-06-21 23:41:21', NULL),
(42, 'Michael Jordan te amo ', 64, 21, '2022-06-21 23:41:33', '2022-06-21 23:41:33', NULL),
(43, 'Tremendas Travis', 58, 21, '2022-06-21 23:41:55', '2022-06-21 23:41:55', NULL),
(44, 'mis favoritas. Son las mismas que tiene Luis Cabello?', 63, 23, '2022-06-21 23:42:22', '2022-06-21 23:42:22', NULL),
(45, 'No me gustan mucho la verdad', 56, 23, '2022-06-21 23:42:33', '2022-06-21 23:42:33', NULL),
(46, 'Algun dia me las voy a comprar', 59, 23, '2022-06-21 23:42:45', '2022-06-21 23:42:45', NULL),
(47, 'Facherisimas', 64, 22, '2022-06-21 23:43:01', '2022-06-21 23:43:01', NULL),
(48, 'Muy buenas che', 63, 22, '2022-06-21 23:43:07', '2022-06-21 23:43:07', NULL),
(49, 'Bastante feas', 57, 22, '2022-06-21 23:43:13', '2022-06-21 23:43:13', NULL),
(50, 'Espero que para mi cumple me regalen estas', 60, 24, '2022-06-21 23:44:00', '2022-06-21 23:44:00', NULL),
(51, 'Tremendas', 65, 21, '2022-06-22 17:15:05', '2022-06-22 17:15:05', NULL),
(52, 'Muy facheras', 65, 25, '2022-06-22 17:29:31', '2022-06-22 17:29:31', NULL),
(53, 'Estas codean solas', 64, 25, '2022-06-22 17:29:37', '2022-06-22 17:29:37', NULL),
(54, 'Hola', 65, 24, '2022-06-22 17:47:07', '2022-06-22 17:47:07', NULL),
(55, 'Muy buenas', 65, 24, '2022-06-22 18:48:37', '2022-06-22 18:48:37', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `followers`
--

CREATE TABLE `followers` (
  `id` int(11) NOT NULL,
  `id_usuario_seguidor` int(11) NOT NULL,
  `id_usuario_seguido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `description` text,
  `photo` varchar(1000) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `description`, `photo`, `model`, `users_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(55, 'Actualizadas version 2022', 'imgProduct-1655863127777.png', 'Nike Dunk 2022', 22, '2022-06-21 23:31:35', '2022-06-22 01:58:47', NULL),
(56, 'Virgil Abloh emphasizes accessibility and wearability with the OFF-WHITE x Chuck 70 White collab. As a result, the classic silhouette is ensconced in traditional cotton canvas and finished in a versatile crisp white shade. Virgil retains the shoes signature and rubber license plate, though the latter is turned upside down. Additional flourishes include the OFF-WHITEs trademark diagonal midsole stripes, printed text on the medial side, and a bright orange outsole', 'imgProduct-1655854328068.png', 'Off White Converse\'', 22, '2022-06-21 23:32:08', '2022-06-21 23:32:08', NULL),
(57, 'Off whites out of office sneaker was born from the need to create a tennis shoe with an 80s aesthetic, which could be worn all day, every day. The result is a low silhouette with hybrid street, basketball and running influences', 'imgProduct-1655854382714.png', 'OFF-WHITE Out Of Office', 23, '2022-06-21 23:33:02', '2022-06-21 23:33:02', NULL),
(58, 'The second collaboration between Nike and Travis Scoot, the Travis Scott x Air Force 1 Sail features a look similar to its predecessor. The main difference is the Sail finish throughout, which replaces the all-white look. The canvas upper sports removable Swoosh and tongue patch detailing, while the lace deubré recalls Scotts signature grill', 'imgProduct-1655854402080.png', 'TRAVIS SCOTT X AIR FORCE 1 SAIL', 23, '2022-06-21 23:33:22', '2022-06-21 23:33:22', NULL),
(59, 'Part of a collaboration from Virgil Abloh and Nike, the OFF-WHITE x Air Max 90 Black emerges with a bold take on the classic runner. The shoes upper is built with a mix of leather, suede and nubuck, all finished in black. The Swoosh branding contrasts the look, while the shoelaces and medial side sport Ablohs usual text branding. Underfoot, a black midsole houses a visible Air unit in the heel for cushioning', 'imgProduct-1655854435197.png', 'OFF-WHITE X AIR MAX 90 BLACK', 21, '2022-06-21 23:33:55', '2022-06-21 23:33:55', '2022-06-22 17:13:18'),
(60, '\'The Air Jordan 4 Retro University Blue looks to Michael Jordans college days to inform its classic look. Built with suede, the shoes upper appears primarily in University Blue, with cement detailing on the classic wings and heel overlay. Tonal mesh inserts emerge at the vamp and quarter panel, while the tongue tag is designed to look like a jock tag on the bottom hem of Jordan jerseys. Visible Air in the heel of the speckled midsole provides cushioning', 'imgProduct-1655854457603.png', 'AIR JORDAN 4 RETRO UNIVERSITY BLUE', 21, '2022-06-21 23:34:17', '2022-06-21 23:34:17', NULL),
(61, 'The Air Jordan 1 Retro High OG Light Smoke Grey emerges with a neutral look and a vibrant accent. The shoes upper features a white leather base overlaid by Light Smoke Grey suede, with black contrast on the Swoosh, collar, laces and tongue tag. The collar flap highlights the look in Varsity Red, matched by the tongue branding, while an Air midsole and concentric outsole support the fit underfoot', 'imgProduct-1655854489030.png', 'Jordan 1 High', 21, '2022-06-21 23:34:49', '2022-06-21 23:34:49', '2022-06-21 23:39:05'),
(62, 'Dropping with a reflective colorway, the Yeezy Boost 350 V2 Yecheil Non-Reflective emerges with a vibrant look. The upper is built with Primeknit, working a series of bright hues into its construction. Contrasted by a black monofilament stripe that runs through the design, a black TPU midsole underfoot houses a Boost unit, with a rubber outsole for traction', 'imgProduct-1655854516373.png', 'Yeezy 350', 21, '2022-06-21 23:35:16', '2022-06-21 23:35:16', '2022-06-21 23:39:02'),
(63, 'Dropping with a reflective colorway, the Yeezy Boost 350 V2 Yecheil Non-Reflective emerges with a vibrant look. The upper is built with Primeknit, working a series of bright hues into its construction. Contrasted by a black monofilament stripe that runs through the design, a black TPU midsole underfoot houses a Boost unit, with a rubber outsole for traction', 'imgProduct-1655854806890.png', 'Yeezy 350', 24, '2022-06-21 23:40:06', '2022-06-21 23:40:06', NULL),
(64, 'The Air Jordan 1 Retro High OG Light Smoke Grey emerges with a neutral look and a vibrant accent. The shoes upper features a white leather base overlaid by Light Smoke Grey suede, with black contrast on the Swoosh, collar, laces and tongue tag. The collar flap highlights the look in Varsity Red, matched by the tongue branding, while an Air midsole and concentric outsole support the fit underfoot', 'imgProduct-1655854827990.png', 'Jordan 1 high', 24, '2022-06-21 23:40:27', '2022-06-21 23:40:27', NULL),
(65, 'Part of a collaboration from Virgil Abloh and Nike, the OFF-WHITE x Air Max 90 Black emerges with a bold take on the classic runner. The shoes upper is built with a mix of leather, suede and nubuck, all finished in black. The Swoosh branding contrasts the look, while the shoelaces and medial side sport Ablohs usual text branding. Underfoot, a black midsole houses a visible Air unit in the heel for cushioning', 'imgProduct-1655917978878.png', 'OFF-WHITE X AIR MAX 90 BLACK', 25, '2022-06-22 17:12:58', '2022-06-22 17:12:58', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `contrasena` varchar(250) DEFAULT NULL,
  `foto` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `nombre`, `apellido`, `contrasena`, `foto`) VALUES
(21, 'ivalencia010@gmail.com', 'Iñaki', 'Valencia', '$2a$10$FAHbHYvtFnwzn3BKtB3ubuSwtlkxLe.1Zribrz06Pj2EJgN3Qy7Nq', 'imgPerfil-1655854133344.png'),
(22, 'franco@gmail.com', 'Franco', 'Mainardi', '$2a$10$7WS2byX8orbRkcCgpTNUBeMwuD5GayP54rP.XKlwenXnkPCcs5PAu', 'imgPerfil-1655854154140.png'),
(23, 'alevivone@gmail.com', 'Alejandro', 'Vivone', '$2a$10$RdsJCZTs7/sBoIrEXaLiaOpT3Qff.tduMUzOIlq7I5zsde75OqXeW', 'imgPerfil-1655854176957.png'),
(24, 'bgomez@digitalhouse.com', 'Ing. Brian', 'Gomez', '$2a$10$US6.JLlq.Dzv./w3FRVH4eNSGSbPvGPM0GYbZbgcH3dnTPP0qPi3W', 'imgPerfil-1655854189904.png'),
(25, 'facu@gmail.com', 'Facundo', 'Romano', '$2a$10$GEkn5UT0LQy24etyh500feiqVNS6P.2avdqX3/Sfi1SgIweB7L.9G', 'imgPerfil-1655917893839.jpeg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_id` (`products_id`),
  ADD KEY `users_id` (`users_id`);

--
-- Indices de la tabla `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario_seguidor` (`id_usuario_seguidor`),
  ADD KEY `followers_ibfk_2` (`id_usuario_seguido`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de la tabla `followers`
--
ALTER TABLE `followers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`id_usuario_seguidor`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`id_usuario_seguido`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
