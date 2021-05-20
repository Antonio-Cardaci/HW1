-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 20, 2021 alle 16:20
-- Versione del server: 10.4.17-MariaDB
-- Versione PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `clienti`
--

CREATE TABLE `clienti` (
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Nome` varchar(255) DEFAULT NULL,
  `Cognome` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `clienti`
--

INSERT INTO `clienti` (`Username`, `Password`, `Nome`, `Cognome`, `Email`) VALUES
('Anto', 'Ab12345678!', 'aa', 'aa', 'aa');

-- --------------------------------------------------------

--
-- Struttura della tabella `contenuti`
--

CREATE TABLE `contenuti` (
  `id` int(255) NOT NULL,
  `Immagine` varchar(255) NOT NULL,
  `Nome` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `contenuti`
--

INSERT INTO `contenuti` (`id`, `Immagine`, `Nome`) VALUES
(1, 'img/1.jpg', 'Bagno-Suite'),
(2, 'img/3.jpg', 'Camera'),
(3, 'img/4.jpg', 'Colazione Vista Mare'),
(4, 'img/6.jpg', 'Idromassaggio in camera'),
(5, 'img/2.jpg', 'Suite '),
(6, 'img/5.jpg', 'Suite Deluxe');

-- --------------------------------------------------------

--
-- Struttura della tabella `preferiti`
--

CREATE TABLE `preferiti` (
  `Username` varchar(255) NOT NULL,
  `Titolo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struttura della tabella `servizi`
--

CREATE TABLE `servizi` (
  `Titolo` varchar(255) NOT NULL,
  `Immagine` varchar(255) DEFAULT NULL,
  `Descrizione` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `servizi`
--

INSERT INTO `servizi` (`Titolo`, `Immagine`, `Descrizione`) VALUES
('Centro Benessere', 'img/unnamed.jpg', 'Il centro benessere piu\' ambito in Italia'),
('Palestra', 'img/palestra.jpg', 'La palestra e\' dotata dei migliori attrezzi'),
('Piscina', 'img/piscina.jpg', 'La piscina viene curata dal nostro bagnino'),
('Ristorante', 'img/ristorante.jpg', 'Il ristorante può fare 90 coperti'),
('Sala Meeting', 'img/sala1.jpg', 'La sala meeting può ospitare 150 ospiti'),
('Spiaggia', 'img/spiaggia.jpeg', 'Rilassati sulla nostra spiaggia privata');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `clienti`
--
ALTER TABLE `clienti`
  ADD PRIMARY KEY (`Username`);

--
-- Indici per le tabelle `contenuti`
--
ALTER TABLE `contenuti`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indici per le tabelle `preferiti`
--
ALTER TABLE `preferiti`
  ADD PRIMARY KEY (`Username`,`Titolo`);

--
-- Indici per le tabelle `servizi`
--
ALTER TABLE `servizi`
  ADD PRIMARY KEY (`Titolo`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `contenuti`
--
ALTER TABLE `contenuti`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
