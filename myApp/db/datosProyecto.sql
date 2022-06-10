-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 10-06-2022 a las 20:31:45
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
  `deletedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `followers`
--

CREATE TABLE `followers` (
  `id` int(11) NOT NULL,
  `id_usuario_seguidor` int(11) NOT NULL,
  `id_usuarios_seguido` int(11) NOT NULL
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
  `deletedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `description`, `photo`, `model`, `users_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(29, 'The Air Jordan 4 Retro University Blue looks to Michael Jordans college days to inform its classic look. Built with suede, the shoes upper appears primarily in University Blue, with cement detailing on the classic wings and heel overlay. Tonal mesh inserts emerge at the vamp and quarter panel, while the tongue tag is designed to look like a jock tag on the bottom hem of Jordan jerseys. Visible Air in the heel of the speckled midsole provides cushioning.', 'imgProduct-1654650294681.png', 'AIR JORDAN 4 RETRO UNIVERSITY BLUE', NULL, '2022-06-08 01:04:54', '2022-06-08 01:04:54', '2022-06-08 01:04:54'),
(30, '\'Dropping with a reflective colorway, the Yeezy Boost 350 V2 Yecheil Non-Reflective emerges with a vibrant look. The upper is built with Primeknit, working a series of bright hues into its construction. Contrasted by a black monofilament stripe that runs through the design, a black TPU midsole underfoot houses a Boost unit, with a rubber outsole for traction.', 'imgProduct-1654650487304.png', 'Yeezy 350', NULL, '2022-06-08 01:08:07', '2022-06-08 01:08:07', '2022-06-08 01:08:07'),
(31, 'The Air Jordan 1 Retro High OG Light Smoke Grey emerges with a neutral look and a vibrant accent. The shoes upper features a white leather base overlaid by Light Smoke Grey suede, with black contrast on the Swoosh, collar, laces and tongue tag. The collar flap highlights the look in Varsity Red, matched by the tongue branding, while an Air midsole and concentric outsole support the fit underfoot.', 'imgProduct-1654650531808.png', 'Jordan 1 high', NULL, '2022-06-08 01:08:51', '2022-06-08 01:08:51', '2022-06-08 01:08:51'),
(32, 'Part of a collaboration from Virgil Abloh and Nike, the OFF-WHITE x Air Max 90 Black emerges with a bold take on the classic runner. The shoes upper is built with a mix of leather, suede and nubuck, all finished in black. The Swoosh branding contrasts the look, while the shoelaces and medial side sport Ablohs usual text branding. Underfoot, a black midsole houses a visible Air unit in the heel for cushioning.', 'imgProduct-1654650644873.png', 'OFF-WHITE X AIR MAX 90 BLACK', NULL, '2022-06-08 01:10:44', '2022-06-08 01:10:44', '2022-06-08 01:10:44'),
(33, 'The second collaboration between Nike and Travis Scoot, the Travis Scott x Air Force 1 Sail features a look similar to its predecessor. The main difference is the Sail finish throughout, which replaces the all-white look. The canvas upper sports removable Swoosh and tongue patch detailing, while the lace deubré recalls Scotts signature grill.', 'imgProduct-1654650697963.png', 'TRAVIS SCOTT X AIR FORCE 1 SAIL', NULL, '2022-06-08 01:11:37', '2022-06-08 01:11:37', '2022-06-08 01:11:37'),
(34, 'Off whites out of office sneaker was born from the need to create a tennis shoe with an 80s aesthetic, which could be worn all day, every day. The result is a low silhouette with hybrid street, basketball and running influences.', 'imgProduct-1654650726278.png', 'OFF-WHITE Out Of Office', NULL, '2022-06-08 01:12:06', '2022-06-08 01:12:06', '2022-06-08 01:12:06'),
(35, 'Virgil Abloh emphasizes accessibility and wearability with the OFF-WHITE x Chuck 70 White collab. As a result, the classic silhouette is ensconced in traditional cotton canvas and finished in a versatile crisp white shade. Virgil retains the shoes signature and rubber license plate, though the latter is turned upside down. Additional flourishes include the OFF-WHITEs trademark diagonal midsole stripes, printed text on the medial side, and a bright orange outsole.', 'imgProduct-1654650757616.webp', 'Off White Converse', NULL, '2022-06-08 01:12:37', '2022-06-08 01:12:37', '2022-06-08 01:12:37'),
(36, 'Altas llantas', 'imgProduct-1654888011484.png', 'Nike Dunk 2022', NULL, '2022-06-08 01:13:01', '2022-06-10 19:06:51', '2022-06-08 01:13:01'),
(37, 'Los tonos familiares de los Air Jordan 1 se diseñaron en una combinación de colores clásica estilo bloques de color. El modelo incluye cuero auténtico en azul universitario en el tobillo, el talón, la punta y la suela, mientras que el Swoosh y el cuello lucen un tono negro en contraste con el blanco del panel lateral, la entresuela, la lengüeta y la zona perforada de la punta. El logotipo Wings en negro y el diseño de la marca en azul universitario en la lengüeta aportan el toque final a los detalles clásicos e impecables de este calzado.', 'imgProduct-1654710471240.png', 'Jordan 1 High - University Blue', NULL, '2022-06-08 17:47:51', '2022-06-08 17:47:51', '2022-06-08 17:47:51');

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
(3, 'ivalencia010@gmail.com', 'Inaki', 'Valencia', '$2a$10$m4nb6oJIqzv4tX1.oyjXFuluZh/S7z/dAPjXQG.mpQ//U5YgBJIGS', ''),
(4, 'martupalazzini@gmail.com', 'martina', 'palazzini', '$2a$10$H/.PUOa9V3B8krhBb8LDeulpgM3sQeNjf20JUV6LJhv7UZYpYa3DO', ''),
(5, 'ivalencia010@gmail.com', 'Iñaki', 'Valencia', '$2a$10$s1rbzEwpc23zQrKkS8EWc.BVhfW8LFDq2vNBvFgUxRFLHcMKmf6JG', 'pipa.jpeg');

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
  ADD KEY `id_usuarios_seguido` (`id_usuarios_seguido`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `followers`
--
ALTER TABLE `followers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
  ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`id_usuarios_seguido`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
